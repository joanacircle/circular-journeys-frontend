const express = require('express')
const db = require('../../model/connect-sql')
const moment = require("moment-timezone")
require('dotenv').config()
const router = express.Router()
const multiparty = require('connect-multiparty')
const path = require('path')
const fs = require('fs')
const uuid = require('uuid')
const MultipartyMiddleWare = multiparty({uploadDir: path.join(__dirname, '../../../public')})

// http://localhost:3001/blog  // Blog
router.get('/', async (req, res) => {
  const sql = `
  SELECT
    posts.post_id,
    posts.create_at,
    posts.member_id,
    posts.post_title,
    posts.total_likes,
    post_imgs.img_id,
    users_information.last_name,
    (
      SELECT JSON_OBJECTAGG(post_tags.tag_id, post_tags.tag)
      FROM post_tags
      WHERE post_tags.post_id = posts.post_id
    )
    AS tag
  FROM post_imgs
  JOIN posts
  ON posts.post_id = post_imgs.post_id && post_imgs.img_index = 1
  JOIN users_information
  ON posts.member_id = users_information.member_id
  WHERE 1
  `
  const [rows] = await db.query(sql);
  
  rows.forEach(row => {
    row.create_at = moment(row.create_at).format('YYYY/MM/DD')
  });
  res.json(rows);
})

// TODO 改用後端驗證
// http://localhost:3001/blog/api
router.get('/api', async (req, res) => {
  const sql =`SELECT JSON_ARRAYAGG(post_id) AS post_id FROM posts WHERE 1`
  const sql2 =`SELECT JSON_ARRAYAGG(member_id) AS member_id FROM users_information WHERE 1`

  const sql3 =`SELECT JSON_ARRAYAGG(tag_id) AS tag_id FROM post_tags WHERE 1`

  const [rows] = await db.query(sql)
  const [rows2] = await db.query(sql2)
  const [rows3] = await db.query(sql3)

  res.json({post: rows, member: rows2, tag: rows3})
})

// TODO 移除沒有使用的照片
// http://localhost:3001/blog/upload-cover // PostEditor for upload cover-pic
router.post('/upload-cover', MultipartyMiddleWare, async (req, res) => {
  const TempFile = req.files.upload 
  const TempPathFile = TempFile.path 
  const ext = path.extname(TempFile.originalFilename).toLowerCase()
  const fileName = uuid.v4() + ext
  const targetPathUrl = path.join(__dirname,"../../../public/blog/"+fileName)
  
  if(ext === '.png' || '.jpg' ){
    fs.rename(TempPathFile, targetPathUrl, err=>{
      res.json({
        uploaded: true,
        url: `http://localhost:${process.env.PORT}/blog/${fileName}`
      })
      if(err) return console.log(err)
    })
  }
})

// http://localhost:3001/blog/upload-img // PostEditor for upload img
router.post('/upload-img', MultipartyMiddleWare, (req, res) => {
  const TempFile = req.files.upload 
  const TempPathFile = TempFile.path // 照片第一次(暫時)上傳的位置('public')
  const ext = path.extname(TempFile.originalFilename).toLowerCase() // path.extname() 會回傳檔案類型(ex.'.jpg')
  const fileName = uuid.v4() + ext
  const targetPathUrl = path.join(__dirname,"../../../public/blog/"+fileName) // 照片驗證後最終儲存的位置('public/blog')與其名稱

  
  // 先驗證是否為png或jpg檔
  if(ext === '.png' || '.jpg'){
    // fs.rename(原位置, 新位置, callback)
    // 1. 驗證成功則將照片移至最終儲存的位置('public/blog')，且更改照片名稱
    // 2. server 回傳照片的路徑給 client
    fs.rename(TempPathFile, targetPathUrl, err=>{
      res.json({
        uploaded: true,
        url: `http://localhost:${process.env.PORT}/blog/${fileName}`
      })
      if(err) return console.log(err)
    })
  }
})

// http://localhost:3001/newpost/:member_id // PostEditor
router.post('/newpost/:member_id', async(req, res) => {
  const { memberId, title, tags, tag1, tag2, tag3, cover, content } = req.body
  const postId = 'p' + uuid.v4()
  const totalTag = [tag1, tag2, tag3].filter((v)=>{
    return (v.length>0)
  })
  if(tags.length>0){
    tags.map((v, i) => {totalTag.push(v)})
  }

  const sqlInsertPost = `
  INSERT INTO posts(post_id, create_at, modify_at, member_id, post_title, cover, post_content) VALUES (?,NOW(),null,?,?,?,?)`
  const sqlSelectTag=`
  SELECT tag_id FROM post_tags WHERE tag = ? LIMIT 1`
  const sqlInsertTag = `
  INSERT INTO post_tags(tag_id, tag, post_id) VALUES (?,?,?)`


  try{
    const [rows] = await db.query(sqlInsertPost, [postId, memberId, title, cover, content])
    
    for(const tag of totalTag){
      const [rows2] = await db.query(sqlSelectTag, [tag]) // 確認有無一樣的 tag
      if(rows2.length > 0){ // 如果有一樣的 tag，取出其 tag_id，再新增
        const existingTagId = rows2[0].tag_id
        const [rows3] = await db.query(sqlInsertTag, [existingTagId, tag, postId])
      }else{
        const tagId = 't' + uuid.v4()
        const [rows3] = await db.query(sqlInsertTag, [tagId, tag, postId])
      }
    }
    res.send('success')
  }
  catch(err){
    res.send(err)
  }
})

// http://localhost:3001/blog/:member_id // UserBlog
router.get('/:member_id', async (req, res) => {
  const member_id = req.params.member_id;

  const sql =`
  SELECT 
    posts.post_id,  
    posts.create_at,  
    posts.post_title, 
    posts.post_content, 
    posts.total_likes,
    post_imgs.img_id, 
    users_information.last_name,
    (
      SELECT JSON_OBJECTAGG(post_tags.tag_id, post_tags.tag)
      FROM post_tags 
      WHERE post_tags.post_id = posts.post_id
    ) 
    AS tag
  FROM post_imgs 
  JOIN posts 
  ON posts.post_id = post_imgs.post_id && post_imgs.img_index = 1 
  JOIN users_information 
  ON users_information.member_id = ?
  WHERE posts.member_id = ?
  ORDER BY create_at DESC
  `
  const [rows] = await db.query(sql, [member_id, member_id],
    (err, result) => {
      if (err) throw err
      res.json(result)
    });

  rows.forEach(row => {
    row.create_at = moment(row.create_at).format('YYYY/MM/DD');
  });
  res.json(rows);
})

// http://localhost:3001/blog/post/:post_id // SinglePost
router.get('/post/:post_id', async (req, res) => {
  const post_id = req.params.post_id;
  const sql =`
  SELECT 
    posts.post_title, 
    posts.member_id,
    users_information.last_name,
    post_imgs.img_id, 
    posts.create_at,  
    posts.total_likes,
    posts.post_content, 
    posts.post_id,  
    (
      SELECT JSON_OBJECTAGG(post_tags.tag_id, post_tags.tag)
      FROM post_tags 
      WHERE post_tags.post_id = posts.post_id
    ) 
    AS tag
  FROM post_imgs 
  JOIN posts 
  ON posts.post_id = post_imgs.post_id && post_imgs.img_index = 1 
  JOIN users_information 
  ON posts.member_id = users_information.member_id
  WHERE posts.post_id = ?
  `

  const [rows] = await db.query(sql, [post_id],
    (err, result) => {
      if (err) throw err
      res.json(result)
    });

  rows.forEach(row => {
    row.create_at = moment(row.create_at).format('YYYY/MM/DD');
  });
  res.json(rows);
})

module.exports = router;
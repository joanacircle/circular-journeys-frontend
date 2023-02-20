const express = require('express');
const db = require('../../model/connect-sql');
const moment = require("moment-timezone");
require('dotenv').config();
const router = express.Router();
const multiparty = require('connect-multiparty')
const path = require('path')
const fs = require('fs')

const MultipartyMiddleWare = multiparty({uploadDir: path.join(__dirname, '../../../public')})

// TODO 驗證 url

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

// TODO 1. 檔名稱使用uuid  2. 移除沒有使用的照片
// http://localhost:3001/blog/newpost/:member_id // PostEditor
router.post('/newpost/:member_id', MultipartyMiddleWare, (req, res) => {
  const TempFile = req.files.upload 
  const TempPathFile = TempFile.path // 照片第一次(暫時)上傳的位置('public')
  const targetPathUrl = path.join(__dirname,"../../../public/blog/"+TempFile.name) // 照片驗證後最終儲存的位置('public/blog')與其名稱

  const ext = path.extname(TempFile.originalFilename).toLowerCase()
  // path.extname() 會回傳檔案類型(ex.'.jpg')
  // 先驗證是否為png或jpg檔
  if(ext === '.png' || '.jpg'){
    // fs.rename(原位置, 新位置, callback)
    // 1. 驗證成功則將照片移至最終儲存的位置('public/blog')，且更改照片名稱
    // 2. server 回傳照片的路徑給 client
    fs.rename(TempPathFile, targetPathUrl, err=>{
      res.json({
        uploaded: true,
        url: `http://localhost:${process.env.PORT}/blog/${TempFile.originalFilename}`
      })
      if(err) return console.log(err)
    })
  }
})

// http://localhost:3001/blog/:member_id // UserBlog
router.get('/:member_id', async (req, res) => {
  const member_id = req.params.member_id;

  // SELECT GROUP_CONCAT(tag SEPARATOR ',')
  // SELECT JSON_ARRAYAGG(tag) 
  // SELECT JSON_OBJECTAGG( key_column, value_column )

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
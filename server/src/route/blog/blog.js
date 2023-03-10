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

// http://localhost:3001/blog  -> Blog
router.get('/', async (req, res) => {
  const sql = `
    SELECT
      posts.post_id,
      posts.create_at,
      posts.member_id,
      posts.post_title,
      posts.total_likes,
      posts.cover,
      users_information.user_nickname,
      (
        SELECT JSON_OBJECTAGG(post_tags.tag_id, post_tags.tag)
        FROM post_tags
        WHERE post_tags.post_id = posts.post_id
      )
      AS tag
    FROM users_information
    JOIN posts
    ON posts.member_id = users_information.member_id
    WHERE 1
  `

  try{
    const [rows] = await db.query(sql);
    
    rows.forEach(row => {
      row.create_at = moment(row.create_at).format('YYYY/MM/DD')
    })
    res.json(rows)
  }
  catch(err){
    res.json(err)
  }
})

// http://localhost:3001/blog/api/:id
router.get('/api/:id', async (req, res) => {
  const id = req.params.id
  const sql =`SELECT post_id FROM posts WHERE post_id = ?`
  const sql2 =`SELECT member_id FROM users_information WHERE member_id = ?`
  const sql3 =`SELECT tag_id FROM post_tags WHERE tag_id = ?`

  try{
    const [rows] = await db.query(sql,[id])
    const [rows2] = await db.query(sql2,[id])
    const [rows3] = await db.query(sql3,[id])

    res.json({post: rows, member: rows2, tag: rows3})
  }
  catch(err){
    res.json(err)
  }
})

// http://localhost:3001/blog/tag -> side nav
router.get('/tag', async(req, res)=>{
  const sql =`
    SELECT tag_id, tag FROM post_tags
  `
  try{
    let [rows] = await db.query(sql)
    rows = rows.filter((v, i, self)=>(
      i === self.findIndex(v2=>(
        v.tag === v2.tag && v.tag_id === v2.tag_id
      ))
    ))

    res.json(rows)
  }
  catch(err){
    res.json(err)
  }
})

// http://localhost:3001/blog/postLike/:member_id
router.get('/postLike/:member_id', async(req, res)=>{
  const userMemberId = req.params.member_id
  const sql = `SELECT post_id FROM post_like WHERE member_id=?`
  try{
    const [rows] = await db.query(sql, [userMemberId])
    const result = rows.map((v)=>(v.post_id))

    res.json(result)
  } 
  catch (err) {
    res.json(err)
  }
})

// http://localhost:3001/blog/like
router.post('/like', async (req, res) => {
  const output = { success: false, errors: '' }
  const {userMemberId, postId} = req.body
  const sqlSelect= `SELECT post_id FROM post_like WHERE member_id = ?`
  const sqlInsert = `
  INSERT INTO post_like(post_id, member_id) VALUES (?, ?)`
  const sqlDelete = `
  DELETE FROM post_like WHERE post_id = ? AND member_id = ?`

  try{
    let rows
    const [existPostId] = await db.query(sqlSelect, [userMemberId])
    eid = existPostId.map(v=>v.post_id)

    if(eid.includes(postId)) {
      rows = await db.query(sqlDelete, [postId, userMemberId])
    }else{
      rows = await db.query(sqlInsert, [postId, userMemberId])
    }

    const [[{total}]] = await db.query("SELECT COUNT(1) total FROM post_like WHERE post_id=?", [postId]);

    await db.query("UPDATE `posts` SET `total_likes`=? WHERE post_id=?", [total, postId]);

    output.success = true

    res.json(output)
  }
  catch(err){
    output.errors = err
    res.json(output)
  }
})

// http://localhost:3001/blog/unlike/:post_id
// router.delete('/unlike/:post_id', async (req, res) => {
//   const output = { success: false, errors: '' }
//   const postId = req.params.post_id
//   const sql = `
//   DELETE FROM post_like WHERE post_id = ?`

//   try {
//     const [rows] = await db.query(sql, [postId])
//     output.success = !! rows.affectedRows;

//     const [[{total}]] = await db.query("SELECT COUNT(1) total FROM post_like WHERE post_id=?", [postId]);

//     await db.query("UPDATE `posts` SET `total_likes`=? WHERE post_id=?", [total, postId]);
//     res.json(output);
//   } 
//   catch (err) {
//     output.errors = err;
//     res.json(output);
//   }
// })

// TODO 移除沒有使用的照片
// http://localhost:3001/blog/upload-cover -> PostEditor for upload cover-pic
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

// http://localhost:3001/blog/upload-img -> PostEditor for upload img
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

// http://localhost:3001/blog/newpost/:member_id -> PostEditor
router.post('/newpost/:member_id', async(req, res) => {
  const output = { success: false, errors: '', postId: '' }
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
    
    for(const v of totalTag){
      const [rows2] = await db.query(sqlSelectTag, [v]) // 確認有無一樣的 tag
      if(rows2.length > 0){ // 如果有一樣的 tag，取出其 tag_id，再新增
        const existingTagId = rows2[0].tag_id
        const [rows3] = await db.query(sqlInsertTag, [existingTagId, v, postId])
      }else{
        const tagId = 't' + uuid.v4()
        const [rows3] = await db.query(sqlInsertTag, [tagId, v, postId])
      }
    }
    
    output.success = true
    output.postId = postId

    res.json(output)
  }
  catch(err){
    output.errors = err
    res.json(output)
  }
})

// http://localhost:3001/blog/post/:postId -> EditPost
router.delete('/post/:post_id', async(req, res)=>{
  const output = { success: false, errors: '' }
  const postId = req.params.post_id
  const sqlDeletePosts = `DELETE FROM posts WHERE post_id=?`
  const sqlDeleteTags = `DELETE FROM post_tags WHERE post_id=?`
  const sqlDeleteLike = `DELETE FROM post_like WHERE post_id=?`

  try{
    const [result1] = await db.query(sqlDeletePosts, [postId])
    const [result2] = await db.query(sqlDeleteTags, [postId])
    const [result3] = await db.query(sqlDeleteLike, [postId])
    output.success = !! rows.affectedRows

    res.json(output)
  }
  catch(err){
    output.errors = err
    res.json(output)
  }
})

// http://localhost:3001/blog/post/:post_id -> SinglePost, EditPost
router.get('/post/:post_id', async (req, res) => {
  const post_id = req.params.post_id;
  const sql =`
    SELECT 
    posts.post_id,
    posts.post_title, 
    posts.member_id,
    users_information.user_nickname,
    users_information.picture,
    posts.create_at,  
    posts.total_likes,
    posts.post_content, 
    posts.post_id, 
    posts.cover, 
    (
      SELECT JSON_OBJECTAGG(post_tags.tag_id, post_tags.tag)
      FROM post_tags 
      WHERE post_tags.post_id = posts.post_id
      ) 
      AS tag
    FROM users_information 
    JOIN posts 
    ON posts.member_id = users_information.member_id 
    WHERE posts.post_id = ?
  `
    
  try{
    const [rows] = await db.query(sql, [post_id])
    rows.forEach(row => {
      row.create_at = moment(row.create_at).format('YYYY/MM/DD')
      if(row.tag === null){
        row.tag = []
      }
    })

    res.json(rows)
  }
  catch(err){
    res.json(err)
  }
})

// http://localhost:3001/blog/post/:postId -> EditPost
router.put('/post/:post_id', async(req, res)=>{
  const output = { success: false, errors: '' }
  const {postId, title, tags, tag1, tag2, tag3, coverPath, content} = req.body
  const totalTag = [tag1, tag2, tag3].filter((v)=>{
    return (v.length>0)
  })
  if(tags.length>0){
    tags.map((v, i) => {totalTag.push(v)})
  }

  const sqlUpdatePost = `
  UPDATE posts SET modify_at=now(), post_title=?,post_content=?,cover=? WHERE post_id=?`
  const sqlDeleteTag=`
  DELETE FROM post_tags WHERE post_id=?`
  const sqlSelectTag=`
  SELECT tag_id FROM post_tags WHERE tag = ? LIMIT 1`
  const sqlInsertTag = `
  INSERT INTO post_tags(tag_id, tag, post_id) VALUES (?,?,?)`
  
  try{
    const [result1] = await db.query(sqlUpdatePost, [title, content, coverPath, postId])
    const [result2] = await db.query(sqlDeleteTag, [postId])

    for(const v of totalTag){
      const [result3] = await db.query(sqlSelectTag, [v])
      if(result3.length > 0){
        const exisitTagId = result3[0].tag_id
        const [result4] = await db.query(sqlInsertTag, [exisitTagId, v, postId])
      }else{
        const tagId = 't'+ uuid.v4()
        const [result4] = await db.query(sqlInsertTag, [tagId, v, postId])
      }
    }
    output.success = true

    res.json(output)
  }
  catch(err){
    output.errors = err
    res.json(output)
  }
})

// http://localhost:3001/blog/articleLike/:member_id -> UserBlog(tab)
router.get('/articleLike/:member_id', async (req, res)=>{
  const memberId = req.params.member_id
  const sql2 = `
    SELECT 
      post_like.post_id,  
      posts.create_at,  
      posts.post_title, 
      posts.post_content, 
      posts.total_likes,
      posts.cover, 
    (
      SELECT JSON_OBJECTAGG(post_tags.tag_id, post_tags.tag)
      FROM post_tags 
      WHERE post_tags.post_id = posts.post_id
    ) 
    AS tag 
    FROM users_information 
    JOIN posts 
    ON users_information.member_id = ?
    JOIN post_like
    ON post_like.post_id = posts.post_id
    WHERE post_like.member_id = ?
    ORDER BY create_at DESC
  `

  try{
    const [rows] = await db.query(sql2, [memberId, memberId])
    rows.forEach(row => {
      row.create_at = moment(row.create_at).format('YYYY/MM/DD');
    })

    res.json(rows)
  }
  catch(err){
    res.json(err)
  }
})

const condition_sql = col=>`
  SELECT
    posts.member_id,
    posts.post_id,
    posts.post_title,
    posts.total_likes,
    posts.cover,
    posts.create_at,
    (
      SELECT JSON_OBJECTAGG(post_tags.tag_id, post_tags.tag)
      FROM post_tags 
      WHERE post_tags.post_id = posts.post_id
    ) 
    AS tag
  FROM posts
  ORDER BY ${col} DESC
  `;

// http://localhost:3001/blog/tag/:tag_id -> NavResult
router.get('/tag/:tag_id', async (req, res)=>{
  const tagId = req.params.tag_id
  const sql = `
    SELECT
      posts.post_id,
      posts.create_at,
      posts.member_id,
      posts.post_title,
      posts.total_likes,
      posts.cover,
      users_information.user_nickname,
      (
        SELECT JSON_OBJECTAGG(post_tags.tag_id, post_tags.tag)
        FROM post_tags
        WHERE post_tags.post_id = posts.post_id
      )
      AS tags
    FROM users_information
    JOIN posts
    ON posts.member_id = users_information.member_id
    ORDER BY ? DESC
  `

  const sqlTag = `
    SELECT
      posts.post_id,
      posts.create_at,
      posts.member_id,
      posts.post_title,
      posts.total_likes,
      posts.cover,
      users_information.user_nickname,
      post_tags.tag,
      (
        SELECT JSON_OBJECTAGG(post_tags.tag_id, post_tags.tag)
        FROM post_tags
        WHERE post_tags.post_id = posts.post_id
      )
      AS tags
    FROM users_information
    JOIN posts
    ON posts.member_id = users_information.member_id
    JOIN post_tags
    ON posts.post_id = post_tags.post_id
    WHERE post_tags.tag_id =?
  `

  try{
    let rows
    if(tagId==='popular'){
      [rows] = await db.query(condition_sql('posts.total_likes'))
    }
    else if(tagId==='latest'){ 
      [rows] = await db.query(condition_sql('posts.create_at'))
    }
    else{
      [rows] = await db.query(sqlTag, [tagId])
    }
    rows.forEach(row => {
      row.create_at = moment(row.create_at).format('YYYY/MM/DD')
    })

    res.json(rows)
  }
  catch(err){
    res.json(err)
  }
})

// http://localhost:3001/blog/:member_id -> UserBlog
router.get('/:member_id', async (req, res) => {
  const memberId = req.params.member_id
  const sql =`
    SELECT 
      posts.post_id,  
      posts.create_at,  
      posts.post_title, 
      posts.post_content, 
      posts.total_likes,
      posts.cover, 
      users_information.user_nickname,
      users_information.picture,
      (
        SELECT JSON_OBJECTAGG(post_tags.tag_id, post_tags.tag)
        FROM post_tags 
        WHERE post_tags.post_id = posts.post_id
      ) 
      AS tag 
    FROM users_information 
    JOIN posts 
    ON users_information.member_id = ?
    WHERE posts.member_id = ?
    ORDER BY create_at DESC
  `

  try{
    const [rows] = await db.query(sql, [memberId, memberId])
    rows.forEach(rows => {
      rows.create_at = moment(rows.create_at).format('YYYY/MM/DD');
    })

    res.json(rows)
  }
  catch(err) {
    res.json(err)
  }
})

module.exports = router;
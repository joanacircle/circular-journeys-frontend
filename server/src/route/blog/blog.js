const express = require('express');
const db = require('../../model/connect-sql');
const moment = require("moment-timezone");
require('dotenv').config();
const router = express.Router();

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

// http://localhost:3001/blog/api // for
router.get('/api', async (req, res) => {
  const sql =`SELECT JSON_ARRAYAGG(post_id) AS post_id FROM posts WHERE 1`
  const sql2 =`SELECT JSON_ARRAYAGG(member_id) AS member_id FROM users_information WHERE 1`

  const sql3 =`SELECT JSON_ARRAYAGG(tag_id) AS tag_id FROM post_tags WHERE 1`

  const [rows] = await db.query(sql)
  const [rows2] = await db.query(sql2)
  const [rows3] = await db.query(sql3)

  res.json({post: rows, member: rows2, tag: rows3})
})

// http://localhost:3001/blog/edit/:member_id // PostEditor
router.get('/edit/:member_id', (req, res) => {
  res.status(200).json({ message: 'test'})
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
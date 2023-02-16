const express = require('express')
const db = require('../../model/connect-sql')
require('dotenv').config()
const router = express.Router()

router.get('/', async (req, res) => {
  const sql = `
  SELECT
    posts.post_id,
    posts.post_title,
    posts.create_at,
    post_imgs.img_id
  FROM post_imgs
  JOIN posts
  ON posts.post_id = post_imgs.post_id && post_imgs.img_index = 1
  ORDER BY create_at DESC
  `

  const sql2 = `
  SELECT
    posts.post_id,
    posts.post_title,
    posts.total_likes,
    post_imgs.img_id,
    (
      SELECT JSON_OBJECTAGG(post_tags.tag_id, post_tags.tag)
      FROM post_tags 
      WHERE post_tags.post_id = posts.post_id
    ) 
    AS tag
  FROM post_imgs
  JOIN posts
  ON posts.post_id = post_imgs.post_id && post_imgs.img_index = 1
  ORDER BY total_likes DESC
  `

  const [rows] = await db.query(sql)
  const [rows2] = await db.query(sql2)


  res.json({
    popular: rows,
    latest: rows2
  })
})


module.exports = router
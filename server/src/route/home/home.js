const express = require('express')
const db = require('../../model/connect-sql')
require('dotenv').config()
const router = express.Router()

router.get('/', async (req, res) => {
  const sql = `
  SELECT
    posts.member_id,
    posts.post_id,
    posts.post_title,
    posts.total_likes,
    posts.cover,
    (
      SELECT JSON_OBJECTAGG(post_tags.tag_id, post_tags.tag)
      FROM post_tags 
      WHERE post_tags.post_id = posts.post_id
    ) 
    AS tag
  FROM posts
  ORDER BY ? DESC
  `

  const [rows] = await db.query(sql, ['create_at'])
  const [rows2] = await db.query(sql, ['total_likes'])


  res.json({
    popular: rows,
    latest: rows2
  })
})


module.exports = router
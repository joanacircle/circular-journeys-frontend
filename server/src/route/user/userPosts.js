const express = require('express')
const db = require('../../model/connect-sql')
const router = express.Router()
require('dotenv').config()

//user liked
//http://localhost:3001/userposts/liked
router.post('/liked', async (req, res, next) => {
  const { member_id } = req.body
  const liked_sql = `
    SELECT post_like.post_id, posts.post_title, posts.post_content, posts.create_at, posts.cover
    FROM posts
    INNER JOIN post_like
    ON posts.post_id = post_like.post_id
    WHERE post_like.member_id = ?
  `
  try {
    const [posts] = await db.query(liked_sql, [member_id])
    res.json(posts)
  } catch (err) {
    next(err)
  }
})


module.exports = router

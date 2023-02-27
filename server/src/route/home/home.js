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
      posts.create_at,
      (
        SELECT JSON_OBJECTAGG(post_tags.tag_id, post_tags.tag)
        FROM post_tags 
        WHERE post_tags.post_id = posts.post_id
      ) 
      AS tag
    FROM posts
    ORDER BY ? ASC
    `
  try{
    const [rows] = await db.query(sql, ['total_likes'])
    const [rows2] = await db.query(sql, ['create_at'])
      // 問題：無法依照時間正確排序

    res.json({
      popular: rows,
      latest: rows2
    })
  }
  catch(err){
    console.log(err)
  }


})


module.exports = router
const express = require('express');
const db = require('../../model/connect-sql');
require('dotenv').config();
const router = express.Router();

// http://localhost:3001/blog  // blog
router.get('/', async (req, res)=>{
  const sql = `SELECT * FROM post`
  const [rows] = await db.query(sql);
  
  res.json(rows);
})

// http://localhost:3002/:member_id // userBlog
// last_name from user_information
// SELECT * FROM `post` WHERE `member_id=?`
router.get('/:member_id', async (req, res) => {
  const member_id = req.params.member_id;
  const sql = 'SELECT * FROM `post` WHERE member_id=? ORDER BY create_at DESC'
  const [rows] = await db.query(sql, [member_id]);
  res.json(rows);
})

// http://localhost:3002/:post_id // singlePost
// router.get('/:member_id', async (req, res) => {
//   const post_id = req.params.post_id;
//   const sql = 'SELECT `post_title`, `post_content`, `post_img` FROM `post` WHERE post_id=?'
//   const [rows, fields] = await db.query(sql, [post_id]);
//   res.json(rows[0]);

// })

module.exports = router;
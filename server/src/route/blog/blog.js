const express = require('express');
const db = require('../../model/connect-sql')
require('dotenv').config();
const router = express.Router();

// http://localhost:3002/blog
router.get('/', async (req, res)=>{
  // console.log(process.env.DB_NAME);
  // res.send('blog-page');
  const sql = 'SELECT `post_title`, `post_content`, `post_img` FROM `post` WHERE 1'
  const [rows, fields] = await db.query(sql);
  res.json(rows);
})

// http://localhost:3002/:member_id
// userBlog
// router.get('/:member_id', async (req, res) => {
//   const member_id = req.params.member_id;
//   const sql = 'SELECT `post_title`, `post_content`, `post_img` FROM `post` WHERE member_id=?'
//   const [rows, fields] = await db.query(sql, [member_id]);
//   res.json(rows[0]);

// })

// http://localhost:3002/:post_id
// singlePost
// router.get('/:member_id', async (req, res) => {
//   const post_id = req.params.post_id;
//   const sql = 'SELECT `post_title`, `post_content`, `post_img` FROM `post` WHERE post_id=?'
//   const [rows, fields] = await db.query(sql, [post_id]);
//   res.json(rows[0]);

// })

module.exports = router;
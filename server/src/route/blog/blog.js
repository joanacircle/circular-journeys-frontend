const express = require('express');
const db = require('../../model/connect-sql');
const moment = require("moment-timezone");
require('dotenv').config();
const router = express.Router();

// http://localhost:3001/blog  // blog
router.get('/', async (req, res)=>{
  const sql = `SELECT * FROM post`
  const [rows] = await db.query(sql);
  
  res.json(rows);
})

// http://localhost:3001/:member_id // userBlog
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
  JOIN posts ON posts.post_id = post_imgs.post_id && post_imgs.img_index = 1 
  JOIN users_information ON users_information.member_id = ?
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

// http://localhost:3002/:post_id // singlePost
// router.get('/:member_id', async (req, res) => {
//   const post_id = req.params.post_id;
//   const sql = 'SELECT `post_title`, `post_content`, `post_img` FROM `post` WHERE post_id=?'
//   const [rows, fields] = await db.query(sql, [post_id]);
//   res.json(rows[0]);

// })

module.exports = router;
const express = require('express')
const db = require('../../modules/connect-sql')

const router = express.Router()


//http://localhost:3002/api/user/userslist
router.get('/userslist',(req,res,next) => {
  const sql = 'SELECT * FROM `users_information` ORDER BY id ASC'
  db.query(sql, (err, result) => {
    if (err) throw err
    res.json(result)
  })
})

module.exports = router
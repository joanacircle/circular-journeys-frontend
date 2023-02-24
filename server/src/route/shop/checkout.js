const express = require('express')
const router = express.Router()
const db = require('../../model/connect-sql')

router.get('/', async (req, res) => {
  const sql = "SELECT * FROM `users_information`"
  const [data, index] = await db.query(sql)
  res.json(data)
})

router.get

module.exports = router
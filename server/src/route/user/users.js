const express = require('express')
const db = require('../../model/connect-sql')
const uuid = require('uuid')
const shortid = require('shortid')

const router = express.Router()

//http://localhost:3001/user/userslist
router.get('/userslist', async (req, res, next) => {
  const sql = `SELECT * FROM users_information ORDER BY id ASC`
  const [rows] = await db.query(sql)
  res.json(rows)
})

//http://localhost:3001/user/userinfo
router.post('/userinfo', async (req, res, next) => {
  const { token } = req.body
  const sql = `SELECT * FROM users_information WHERE token = ?`
  try {
    const results = await db.query(sql, [token])
    const data = results[0][0]
    res.json(data)
  } catch (err) {
    next(err)
  }
})

//http://localhost:3001/user/login
router.post('/login', async (req, res, next) => {
  const { userEmail, userPassword } = req.body
  const token = uuid.v4()
  const sql = `SELECT * FROM users_information WHERE email = ? AND password = ?`
  const updateSql = `UPDATE users_information SET token = ? WHERE email = ? AND password = ?`
  try {
    const results = await db.query(sql, [userEmail, userPassword])
    const data = results[0][0]
    if (data) {
      await db.query(updateSql, [token, userEmail, userPassword])
      res.json({
        state: true,
        message: `歡迎回來 ${data.first_name + data.last_name}`,
        data,
        id: data.id,
        token: token
      })
    } else {
      res.json({
        state: false,
        message: '信箱或密碼錯誤！',
        token: ''
      })
    }
  } catch (err) {
    next(err)
  }
})

//http://localhost:3001/user/signup
router.post('/signup', async (req, res, next) => {
  const { userFirstName, userLastName, userEmail, userPassword } = req.body
  const token = uuid.v4()
  const id = shortid.generate()
  const sql = `INSERT INTO users_information (member_id, first_name, last_name, email, password, token) VALUES (?,?,?,?,?,?)`
  const checkSql = `SELECT * FROM users_information WHERE email = ?`
  try {
    const check = await db.query(checkSql, [userEmail])
    if (check[0].length > 0) {
      res.json({
        state: false,
        message: `此信箱以註冊過了！你忘記密碼了嗎？`
      })
    } else {
      const create = await db.query(sql, [id, userFirstName, userLastName, userEmail, userPassword, token])
      if (create) {
        res.json({
          state: true,
          message: `註冊成功！`,
          token
        })
      } else {
        res.json({
          state: false,
          message: `註冊失敗！`
        })
      }
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router
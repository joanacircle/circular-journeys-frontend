const express = require('express')
const db = require('../../model/connect-sql')
const uuid = require('uuid')
const shortid = require('shortid')
const router = express.Router()
const emailjs = require('emailjs-com')

//user list
//http://localhost:3001/user/userslist
router.get('/userslist', async (req, res, next) => {
  const sql = `SELECT * FROM users_information ORDER BY id ASC`
  const [rows] = await db.query(sql)
  res.json(rows)
})

//find user token
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

//user login
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

//user signup
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
        message: `此信箱已註冊過了！`
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

//user forget password
//http://localhost:3001/user/forget
router.post('/forget', async (req, res, next) => {
  const { userEmail } = req.body
  const key = shortid.generate()
  const checkUserEmailSql = `SELECT * FROM users_information WHERE email = ?`
  const setKeySql = `UPDATE users_information SET verify = ? WHERE email = ?`
  try {
    const checkUserEmail = await db.query(checkUserEmailSql, [userEmail])
    if (checkUserEmail[0].length > 0) {
      res.json({
        state: true,
        message: '驗證碼已寄到您的信箱！',
        userLastName: checkUserEmail[0][0].last_name,
        key
      })
      await db.query(setKeySql, [key, userEmail])
    } else {
      res.json({
        state: false,
        message: '此信箱尚未註冊！'
      })
    }
  } catch (err) {
    next(err)
  }
})

//user check key
//http://localhost:3001/user/forget/checkkey
router.post('/forget/checkkey', async (req, res, next) => {
  const { verify } = req.body
  const checkUserKeySql = `SELECT * FROM users_information WHERE verify = ?`
  try {
    const checkKey = await db.query(checkUserKeySql, [verify])
    if (checkKey[0].length > 0) {
      res.json({
        state: true,
        message: '驗證成功！'
      })
    } else {
      res.json({
        state: false,
        message: '驗證碼錯誤！'
      })
    }
  } catch (err) {
    next(err)
  }
})

//user change password
//http://localhost:3001/user/changepassword
router.post('/changepassword', async (req, res, next) => {
  const { userPassword, userEmail } = req.body
  const updateUserPasswordSql = `UPDATE users_information SET password = ? WHERE email = ?`
  try {
    await db.query(updateUserPasswordSql, [userPassword, userEmail])
    res.json({
      state: true,
      message: '更改成功，請重新登入'
    })
  } catch (err) {
    next(err)
  }
})


module.exports = router
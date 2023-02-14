const express = require('express')
const db = require('../../model/connect-sql')
const uuid = require('uuid')

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

//http://localhost:3002/api/user/signup
// router.post('/signup', (req, res, next) => {
//   const {
//     userFirstName,
//     userLastName,
//     userEmail,
//     userPassword,
//     userSex,
//     userTelephone,
//     userBirthday,
//     userCountry,
//     userCity,
//     userAddress
//   } = req.body;
//   const id = uuid.v4(Date);
//   const sql = `INSERT INTO users_information (member_id, first_name, last_name, email, password, token, sex, telephone, birthday, country, city, address) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`
//   const checkSql = `SELECT * FROM users_information WHERE email = ?`
//   db.query(checkSql, [userEmail], (err, result) => {
//     if (err) throw err
//     if (result.length > 0) {
//       res.send({
//         state: false,
//         message: `此信箱已重複註冊！`
//       })
//     } else {
//       db.query(sql, [
//         id,
//         userFirstName,
//         userLastName,
//         userEmail,
//         uuid.v4(userPassword),
//         uuid.v4(userPassword),
//         userSex,
//         userTelephone,
//         userBirthday,
//         userCountry,
//         userCity,
//         userAddress
//       ], (err, result) => {
//         if (err) throw err
//         if (result) {
//           res.send({
//             state: true,
//             message: `註冊成功！`
//           })
//         } else {
//           res.send({
//             state: false,
//             message: `註冊失敗！`
//           })
//         }
//       })
//     }
//   })
// })

module.exports = router
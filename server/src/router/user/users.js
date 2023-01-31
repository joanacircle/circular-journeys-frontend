const express = require('express')
const db = require('../../modules/connect-sql')
const uuid = require('uuid')

const router = express.Router()


//http://localhost:3002/api/user/userslist
router.get('/userslist', (req, res, next) => {
  const sql = `SELECT * FROM users_information ORDER BY id ASC`
  db.query(sql, (err, result) => {
    if (err) throw err
    res.json(result)
  })
})

//http://localhost:3002/api/user/signup
router.post('/signup', (req, res, next) => {
  const {
    userFirstName,
    userLastName,
    userEmail,
    userPassword,
    userSex,
    userTelephone,
    userBirthday,
    userCountry,
    userCity,
    userAddress
  } = req.body;
  const id = uuid.v4(Date);
  const sql = `INSERT INTO users_information (member_id, first_name, last_name, email, password, token, sex, telephone, birthday, country, city, address) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`
  const checkSql = `SELECT * FROM users_information WHERE email = ?`
  db.query(checkSql, [userEmail], (err, result) => {
    if (err) throw err
    if (result.length > 0) {
      res.send({
        state:false,
        message: `此信箱已重複註冊！`
      })
    } else {
      db.query(sql, [
        id,
        userFirstName,
        userLastName,
        userEmail,
        uuid.v4(userPassword),
        uuid.v4(userPassword),
        userSex,
        userTelephone,
        userBirthday,
        userCountry,
        userCity,
        userAddress
      ], (err, result) => {
        if (err) throw err
        if (result) {
          res.send({
            state:true,
            message: `註冊成功！`
          })
        } else {
          res.send({
            state:false,
            message: `註冊失敗！`
          })
        }
      })
    }
  })
})

module.exports = router
const express = require('express')
const db = require('../../model/connect-sql')
const router = express.Router()
require('dotenv').config()


//data
const taiwan = require('../../data/taiwan-data')
//library
const shortid = require('shortid')
const uuid = require('uuid')


//select
//http://localhost:3001/user/select
router.get('/select', async (req, res, next) => {
  try {
    res.json(taiwan)
  } catch (err) {
    next(err)
  }
})

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
        message: `歡迎回來 ${data.user_name}`,
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
  const { userName, userNickName, userEmail, userPassword } = req.body
  const token = uuid.v4()
  const id = shortid.generate()
  const sql = `INSERT INTO users_information (member_id, user_name, user_nickname, email, password, token) VALUES (?,?,?,?,?,?)`
  const checkSql = `SELECT * FROM users_information WHERE email = ?`
  try {
    const check = await db.query(checkSql, [userEmail])
    if (check[0].length > 0) {
      res.json({
        state: false,
        message: `此信箱已註冊過了！`
      })
    } else {
      const create = await db.query(sql, [id, userName, userNickName, userEmail, userPassword, token])
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
        userLastName: checkUserEmail[0][0].user_nickname,
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

//user check address list
//http://localhost:3001/user/address/list
router.post('/address/list', async (req, res, next) => {
  const { member_id } = req.body
  const showList = `SELECT * FROM user_address WHERE member_id = ?`
  try {
    const show = await db.query(showList, [member_id])
    const data = show[0]
    res.json({
      data
    })
  } catch (err) {
    next(err)
  }
})

//user change address
//http://localhost:3001/user/address
router.post('/address', async (req, res, next) => {
  const { member_id, userName, userContact, userAddress, userPostalCode, nation, city, districts } = req.body
  const createAddress = `INSERT INTO user_address (member_id, user_name, user_contact, address, postal_code, nation, city, districts) VALUES(?,?,?,?,?,?,?,?)`
  const showList = `SELECT * FROM user_address WHERE member_id = ?`
  try {
    const check = await db.query(showList, [member_id])
    if (check[0].length < 2) {
      const result = await db.query(createAddress,
        [
          member_id, userName, userContact, userAddress, userPostalCode, nation, city, districts
        ]
      )
      if (result) {
        const show = await db.query(showList, [member_id])
        const data = show[0]
        res.json({
          state: true,
          message: `新增地址成功！`,
          data: data
        })
      } else {
        res.json({
          state: false
        })
      }
    } else {
      const show = await db.query(showList, [member_id])
      const data = show[0]
      res.json({
        state: false,
        message: `通訊地址最多三組！已達上限`,
        data
      })
    }
  } catch (err) {
    next(err)
  }
})

//user delete address
//http://localhost:3001/user/address/delete
router.post('/address/delete', async (req, res, next) => {
  const { id } = req.body
  const sql = `DELETE FROM user_address WHERE id = ?`
  try {
    await db.query(sql, [id])
  } catch (err) {
    next(err)
  }
})


//google acc
//http://localhost:3001/user/google/signup
router.post('/google/signup', async (req, res, next) => {
  const { userEmail, userName, userPicture, userId } = req.body
  const token = uuid.v4()
  const checkSql = `SELECT * FROM users_information WHERE member_id = ?`
  const sql = `INSERT INTO users_information (member_id, user_name, user_nickname, email, picture, token) VALUES (?,?,?,?,?,?)`
  try {
    const check = await db.query(checkSql, [userId])
    if (check[0].length > 0) {
      return
    } else {
      const createUser = await db.query(sql, [userId, userName, userName, userEmail, userPicture, token])
      if (createUser) {
        res.json({
          state: true,
          token
        })
      } else {
        res.json({
          state: false,
        })
      }
    }
  } catch (err) {
    next(err)
  }
})
//http:localhost:3001/user/google/login
router.post('/google/login', async (req, res, next) => {
  const token = uuid.v4()
  const { id } = req.body
  const sql = `SELECT * FROM users_information WHERE member_id = ?`
  const updateSql = `UPDATE users_information SET token = ? WHERE member_id = ?`
  try {
    const result = await db.query(sql, [id])
    const data = result[0][0]
    if (data) {
      await db.query(updateSql, [token, id])
      res.json({
        state: true,
        token: token
      })
    }
  } catch (err) {
    next(err)
  }
})

//user setting info update
//http://localhost:3001/user/setting
router.post('/setting', async (req, res, next) => {
  const { member_id, userName, userNickName, userBirthday, sex, userTelephone, userContactEmail } = req.body
  const sql = `SELECT * FROM users_information WHERE member_id = ?`
  const updateSql = `UPDATE users_information SET user_name = ?, user_nickname = ?, birthday = ?, sex = ?, telephone = ?, contact_email = ?  WHERE member_id = ?`
  try {
    const check = await db.query(sql, [member_id])
    if (check[0][0]) {
      await db.query(updateSql, [userName, userNickName, userBirthday, sex, userTelephone, userContactEmail, member_id])
      res.json({
        state: true,
        message: `更新成功！`
      })
    }
  } catch (err) {
    next(err)
  }
})


module.exports = router

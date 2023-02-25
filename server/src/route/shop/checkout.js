const express = require('express')
const router = express.Router()
const db = require('../../model/connect-sql')

router.get('/', async (req, res) => {
  // const { member_id } = req.query
  const member_id = '104709174078800080046'
  const sql = `SELECT * FROM user_address WHERE member_id = '${member_id}'`
  const [data, index] = await db.query(sql)
  res.json(data)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const { member_id } = req.body
  // console.log(`Requesting values are: ${id} and ${member_id}`)
  try {

    const sql = `DELETE FROM user_address WHERE id = ? AND member_id = ?`

    const [result, index] = await db.query(sql, [id, member_id])

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Address not found' })
    }
    res.json({ message: 'address deleted' })
  } catch (error) {
    console.log(`Error deleting address: ${error}`)
    res.status(500).json({ message: 'Server error' })
  }
})

module.exports = router
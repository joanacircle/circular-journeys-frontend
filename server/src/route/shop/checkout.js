const express = require('express')
const router = express.Router()
const db = require('../../model/connect-sql')

// Get Data
router.get('/', async (req, res) => {
  const { member_id } = req.query
  const sql = `SELECT * FROM user_address WHERE member_id = '${member_id}'`
  const [data, index] = await db.query(sql)
  res.json(data)
})

// Add Data
router.post('/', async (req, res) => {
  const {
    member_id,
    user_name,
    user_contact,
    nation,
    city,
    districts,
    address,
    postal_code
  } = req.body

  try {
    const sql = `INSERT INTO user_address (member_id, user_name, user_contact, nation, city, districts, address, postal_code) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`

    const [result, index] = await db.query(sql, [member_id, user_name, user_contact, nation, city, districts, address, postal_code])

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Address not added' })
    }

    res.json({ message: 'address added' })

  } catch (error) {
    console.log(`Error adding address: ${error}`)
    res.status(500).json({ message: 'Server error' })
  }
})

// Update Data
router.put('/:id', async (req, res) => {
  const { id } = req.params
  const {
    member_id,
    user_name,
    user_contact,
    nation,
    city,
    districts,
    address,
    postal_code
  } = req.body

  try {
    const sql = `UPDATE user_address SET user_name=?, user_contact=?, nation=?, city=?, districts=?, address=?, postal_code=? WHERE id=? AND member_id=?`

    const [result, index] = await db.query(sql, [user_name, user_contact, nation, city, districts, address, postal_code, id, member_id])

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Address not found' })
    }

    res.json({ message: 'address updated' })

  } catch (error) {
    console.log(`Error updating address: ${error}`)
    res.status(500).json({ message: 'Server error' })
  }
})

// Delete Data
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const { member_id } = req.body

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
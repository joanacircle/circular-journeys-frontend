const express = require('express')
const router = express.Router()
const db = require('../../model/connect-sql')

router.post('/', async (req, res) => {
  const { member_id, total_price, order_numbers, cartItems } = req.body;
  try {

    await saveOrderToDatabase(member_id, total_price, order_numbers, cartItems);
    res.status(200).send({ success: true });
  } catch (error) {
    console.log('Error saving order to database:', error);
    res.status(500).send({ error: 'Server error' });
  }
});


async function saveOrderToDatabase(member_id, total_price, order_numbers, cartItems) {

  const connection = await db.getConnection();
  try {
    const [rows, fields] = await connection.execute(
      'INSERT INTO orders (member_id, total_price, is_paid, order_numbers, created_at) VALUES (?, ?, ?, ?, NOW())',
      [member_id, total_price, 1, order_numbers]
    );

    const orderId = rows.insertId;

    const promises = cartItems.map(async (item) => {
      await connection.execute(
        'INSERT INTO order_detail (o_id, p_id, qty) VALUES (?, ?, ?)',
        [orderId, item.p_id, item.count]
      );
    });
    await Promise.all(promises);

    console.log('Order saved to database.');
  } catch (error) {
    console.log('Error saving order to database:', error);
  } finally {
    connection.release();
  }
}


module.exports = router
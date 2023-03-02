const express = require('express')
const db = require('../../model/connect-sql')
const router = express.Router()
require('dotenv').config()

//user orders
//http://localhost:3001/userorders/orders
router.post('/orders', async (req, res, next) => {
  const { member_id } = req.body
  const orders_sql = `SELECT o_id, order_numbers, total_price FROM orders WHERE member_id = ?`
  const products_sql = `
    SELECT
      orders.o_id,
      orders.order_numbers,
      orders.total_price,
    GROUP_CONCAT(
      CONCAT(
      order_detail.qty, ':', 
      products.title, ':', 
      products.price, ':', 
      products.categories
      )
      SEPARATOR '|'
    ) AS items
    FROM
      orders
    INNER JOIN
      order_detail
    ON
      orders.o_id = order_detail.o_id
    INNER JOIN
      products
    ON
      order_detail.p_id = products.p_id
    WHERE
      orders.member_id = ?
    GROUP BY
      orders.o_id
    ORDER BY
      orders.created_at DESC;
  `
  try {
    const [order] = await db.query(orders_sql, [member_id])
    // const [product] = await db.query(products_sql, [o_id])
    res.json(order)
  } catch (err) {
    next(err)
  }
})


//http://localhost:3001/userorders/products
router.post('/products', async (req, res, next) => {
  const { id } = req.body
  const products_sql = `
    SELECT
      order_detail.qty,
      products.title,
      products.price,
      products.categories
    FROM
      orders
    INNER JOIN
      order_detail
    ON
      orders.o_id = order_detail.o_id
    INNER JOIN
      products
    ON
      order_detail.p_id = products.p_id
    WHERE
      orders.o_id = ?
  `
  try {
    const [product] = await db.query(products_sql, [id])
    res.json(product)
  } catch (err) {
    next(err)
  }
})


module.exports = router

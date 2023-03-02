import React, { useContext, useEffect, useState } from 'react'
import './Order.scss'
import axios from 'axios'
import dayjs from 'dayjs'

// Context
import Context from 'components/Context'

// icon
import { BsBoxArrowInDownRight } from 'react-icons/bs'
import { TfiClose } from 'react-icons/tfi'

// url
const ordersURL = `${process.env.REACT_APP_DEV_URL}/userorders/orders`
const productsURL = `${process.env.REACT_APP_DEV_URL}/userorders/products`

const OrderPage = () => {
  const [orders, setOrders] = useState()
  const [products, setProducts] = useState()
  const { isLogin } = useContext(Context)
  const [checkOrder, setCheckOrder] = useState(false)

  const formatter = new Intl.NumberFormat('zh-TW', {
    style: 'currency',
    currency: 'TWD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })

  // handle get orders number
  useEffect(() => {
    const getOrderData = async () => {
      try {
        const result = await axios.post(ordersURL, { member_id: isLogin.userData.member_id })
        const { data } = result
        setOrders(data)
      } catch (err) {
        console.log(err)
      }
    }
    getOrderData()
  }, [])

  // handle get products in order
  const handleCheckProduct = async (id) => {
    setCheckOrder(false)
    try {
      const result = await axios.post(productsURL, { id })
      const { data } = result
      setProducts(data)
    } catch (err) {
      console.log(err)
    }
    setCheckOrder(true)
  }

  // handle close products detail
  const handleClose = () => {
    setCheckOrder()
    setCheckOrder(false)
  }

  return (
    <div className="top-place animate__animated animate__fadeInDown animate__faster">
      <h3>訂單管理</h3>
      <hr />
      <div className='table-place'>
        {
          orders &&
          <>
            <hr />
            <table>
              <thead>
                <tr>
                  <td></td>
                  <td>訂單編號</td>
                  <td>訂單時間</td>
                  <td>總金額</td>
                </tr>
              </thead>
              <tbody>
                {
                  orders.map((order, index) => (
                    <tr
                      className='tr-hover-order'
                      key={index}
                      onClick={() => handleCheckProduct(order.o_id)}
                    >
                      <th>
                        <BsBoxArrowInDownRight color='green' />
                      </th>
                      <th>{order?.order_numbers}</th>
                      <th>{dayjs(order?.created_at).format('YYYY-MM-DD HH:mm')}</th>
                      <th>{formatter.format(order.total_price)}
                      </th>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </>
        }
      </div>
      <hr />
      <div className='product-place'>
        {
          checkOrder &&
          <>
            <hr />
            <table className='animate__animated animate__flipInX animate__faster'>
              <thead>
                <tr>
                  <th>
                    <TfiClose className='icon-pointer' color='red' onClick={handleClose} />
                  </th>
                  <td>商品名稱</td>
                  <td>商品分類</td>
                  <td>商品價格</td>
                  <td>購買數量</td>
                </tr>
              </thead>
              <tbody>
                {
                  products.map((order, index) => (
                    <tr className='tr-hover-order' key={index}>
                      <th>{index + 1 + '.'}</th>
                      <th className='product-title'>{order?.title}</th>
                      <th>{order?.categories}</th>
                      <th>{order?.qty}</th>
                      <th>{formatter.format(order.price)}</th>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </>
        }
      </div>
    </div >
  )
}

export default OrderPage

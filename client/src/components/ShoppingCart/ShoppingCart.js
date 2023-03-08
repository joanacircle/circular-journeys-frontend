import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ShoppingCart.scss'
import 'animate.css'

import CartList from './CartList'
import CartTotal from './CartTotal'
import { userInfo } from 'components/userInfo/UserInfo'
import Snackbar from '@mui/material/Snackbar'


export const ShoppingCart = ({ toggleModal, count }) => {

  const [cartItems, setCartItems] = useState([])
  const { userData } = userInfo()
  const navigate = useNavigate()

  const [loginSnackbarOpen, setLoginSnackbarOpen] = useState(false)
  const [emptyCartSnackbarOpen, setEmptyCartSnackbarOpen] = useState(false)

  useEffect(() => {
    const existingCartItems = JSON.parse(localStorage.getItem('cart')) || []
    setCartItems(existingCartItems)
  }, [])

  const closeModal = (event) => {
    if (event.target === event.currentTarget) {
      toggleModal()
    }
  }

  const handleCheckout = () => {

    if (userData.member_id && count !== 0) {
      navigate('/checkout')
    } else {
      if (userData.member_id) {
        setEmptyCartSnackbarOpen(true)
      }
      setLoginSnackbarOpen(true)
    }
  }

  return (
    <>
      <div className='cart'>
        <div className="modal-background animate__animated animate__fadeIn animate__faster" onClick={closeModal}>
        </div>
        <div className='modal-content animate__animated animate__slideInRight animate__faster'>
          <div className="close-button">
            <button className='close-button-button' onClick={toggleModal}>&times;</button>
          </div>
          <h5 className='modal-title'>我的購物袋</h5>
          <hr className='cart-separator' />
          <CartList
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
          <hr className='cart-separator' />

          <CartTotal
            cartItems={cartItems}
          // totalPrice={totalPrice()}
          />
          <div className='checkout-box' >
            <button className="checkout-button" onClick={handleCheckout}>
              結帳
            </button>
          </div>

        </div>

      </div>
      <Snackbar
        open={loginSnackbarOpen}
        autoHideDuration={1000}
        message="請先登入!"
      />
      <Snackbar
        open={emptyCartSnackbarOpen}
        autoHideDuration={1000}
        message="購物袋是空的喔!"
      />
    </>
  )
}

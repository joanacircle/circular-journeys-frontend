import { Link } from 'react-router-dom'
import './ShoppingCart.scss'
import 'animate.css'
import { useEffect, useState } from 'react'
import CartList from './CartList'
import CartTotal from './CartTotal'


export const ShoppingCart = ({ toggleModal }) => {

  const [cartItems, setCartItems] = useState([])

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
    toggleModal()
    localStorage.setItem('loginFromCheckout', true)
  }

  const totalQuantity = () => {
    let qty = 0
    for (let i = 0; i < cartItems.length; i++) {
      qty += +cartItems[i].count
    }
    localStorage.setItem('cart-count', qty)

    return qty
  }

  const totalPrice = () => {
    let price = 0

    for (let i = 0; i < cartItems.length; i++) {
      price += cartItems[i].count * cartItems[i].price
    }
    localStorage.setItem('cart-total', price)
    return price
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
            totalQuantity={totalQuantity()}
            totalPrice={totalPrice()}
          />
          <div className='checkout-box' >
            <Link
              onClick={handleCheckout}
              to="../checkout"
              title="結帳">
              <button className="checkout-button">
                結帳
              </button>
            </Link>
          </div>

        </div>

      </div>
    </>
  )
}

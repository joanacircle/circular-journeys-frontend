import { Link } from 'react-router-dom'
import './ShoppingCart.scss'
import 'animate.css'
import { useEffect, useState } from 'react'
import CartList from './CartList'
import CartTotal from './CartTotal'

const sampleData = [
  {
    id: 1,
    name: '白色T-shirt',
    price: 100,
    img: 'https://i.imgur.com/ba3tvGm.jpg'
  },
  {
    id: 2,
    name: '黑色T-shirt',
    price: 200,
    img: 'https://i.imgur.com/pHQ3xT3.jpg'
  },
  {
    id: 3,
    name: '咖啡色T-shirt',
    price: 300,
    img: 'https://i.imgur.com/1GrakTl.jpg'
  }
]

export const ShoppingCart = (props) => {

  const {
    toggleModal
  } = props

  const closeModal = (event) => {
    if (event.target === event.currentTarget) {
      toggleModal()
    }
  }

  const [products, setProducts] = useState(sampleData.map((v, i) => ({
    ...v, count: 1
  })))

  const totalQuantity = () => {
    let qty = 0
    for (let i = 0; i < products.length; i++) {
      qty += products[i].count
    }
    return qty
  }

  const totalPrice = () => {
    let price = 0

    for (let i = 0; i < products.length; i++) {
      price += products[i].count * products[i].price
    }
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
            products={products}
            setProducts={setProducts}
          />
          <hr className='cart-separator' />

          <CartTotal
            totalQuantity={totalQuantity()}
            totalPrice={totalPrice()}
          />
          <div className='checkout-box' >
            <Link onClick={toggleModal} to="../checkout" title="結帳">
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

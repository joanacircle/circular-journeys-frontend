import React from 'react'
import './CartList.scss'

const CartList = ({ cartItems, setCartItems }) => {

  return (
    <>
      {cartItems.map((v, i) => {
        console.log('value is ', v)
        const { p_id, title, price, img, count } = v

        const handleChange = (event) => {
          const updatedProducts = [...cartItems]
          updatedProducts[i].count = event.target.value
          setCartItems(updatedProducts)
          localStorage.setItem('cart', JSON.stringify(updatedProducts))
        }

        return (
          <div key={p_id}>
            <div className='itemImage'>
              <img className='cart-img' src={img} alt="product image" />
            </div>
            <div className='itemDetail'>
              <p className='cart-title'>{title}</p>

              <div className='cart-subtotal'>
                <div className='cart-qty'>

                  <p className='qty-qty'>數量<span className='white-space'></span></p>

                  <select className='cart-select' value={count} onChange={handleChange}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
                <p className='itemTotal-p'>$ {parseFloat(price).toLocaleString('zh-TW')}</p>
              </div>

            </div>
          </div>

        )
      })}
    </>
  )
}

export default CartList

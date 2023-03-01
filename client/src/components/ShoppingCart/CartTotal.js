import { useContext } from 'react'
import './CartTotal.scss'
import { CartCountContext } from './CartCountProvider'

const CartTotal = ({ cartItems }) => {

  const { count } = useContext(CartCountContext)
  const { total } = useContext(CartCountContext)

  const { updateCount } = useContext(CartCountContext)
  updateCount(cartItems)
  const { updateTotal } = useContext(CartCountContext)
  updateTotal(cartItems)

  return (
    <>
      <div className='cart-total-box'>
        <h5 className='cart-total-qty'>{count} 件商品</h5>
        <h5 className='cart-total-total'>金額小計 NT$ {parseFloat(total).toLocaleString('zh-TW')} 元</h5>
      </div>
    </>
  )
}

export default CartTotal

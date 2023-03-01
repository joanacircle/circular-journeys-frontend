import { useContext } from 'react'
import './CartTotal.scss'
import { CartCountContext } from './CartCountProvider'

const CartTotal = ({ cartItems, totalPrice }) => {

  const { count } = useContext(CartCountContext)

  const { updateCount } = useContext(CartCountContext)
  updateCount(cartItems)

  // const calcTotalCount = () => {
  //   let qty = 0
  //   for (let i = 0; i < cartItems.length; i++) {
  //     qty += +cartItems[i].count
  //   }

  //   updateCount(qty)
  //   return qty
  // }

  return (
    <>
      <div className='cart-total-box'>
        <h5 className='cart-total-qty'>{count} 件商品</h5>
        <h5 className='cart-total-total'>金額小計 NT$ {parseFloat(totalPrice).toLocaleString('zh-TW')} 元</h5>
      </div>
    </>
  )
}

export default CartTotal

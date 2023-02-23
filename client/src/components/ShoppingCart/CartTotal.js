import './CartTotal.scss'

const CartTotal = ({ totalQuantity, totalPrice }) => {
  return (
    <>
      <div className='cart-total-box'>
        <h5 className='cart-total-qty'>{totalQuantity} 件商品</h5>
        <h5 className='cart-total-total'>金額小計 NT$ {parseFloat(totalPrice).toLocaleString('zh-TW')} 元</h5>
      </div>
    </>
  )
}

export default CartTotal

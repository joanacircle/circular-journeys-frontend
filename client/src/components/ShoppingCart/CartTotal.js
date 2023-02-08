import React from 'react'

const CartTotal = ({ totalQuantity, totalPrice }) => {
  return (
    <>
      <div>

        <h5>{totalQuantity} 件商品</h5>
        <h4>金額小計 NT${totalPrice} 元</h4>
      </div>
    </>
  )
}

export default CartTotal

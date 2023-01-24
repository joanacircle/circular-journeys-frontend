import React from 'react'
import './ProductItem.scss'

const ProductItem = (props) => {
  const { id, name, picture, price, tags } = props.product

  return (
    <div className="product-card">

      <img src={require(`images/shop/products/${picture}`)} />
      <h3>{name}</h3>
      <p>${price}</p>

    </div>
  )
}

export default ProductItem

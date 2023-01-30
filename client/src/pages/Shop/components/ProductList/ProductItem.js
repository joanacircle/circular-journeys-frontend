import React from 'react'
import './ProductItem.scss'

const ProductItem = (props) => {
  const { id, name, picture, price, tags } = props.product

  return (
    <div className="product-card">
      <div className='card-img'>
        <img src={require(`images/shop/products/${picture}`)} />
      </div>

      <div className='card-info'>
        <p className='card-title'>{name}</p>
        <p className='card-price'>${price}</p>
      </div>

    </div>
  )
}

export default ProductItem

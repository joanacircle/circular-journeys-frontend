import React from 'react'
import './ProductItem.scss'

const ProductItem = ({ product }) => {

  return (
    <div className="product-card">
      <div className='card-img'>
        <img src={`${process.env.REACT_APP_DEV_URL}/shop/products/${product.path1}.jpg`} />
      </div>

      <div className='card-info'>
        <p className='card-title'>{product.title}</p>
        <p className='card-price'>${product.price}</p>
      </div>

    </div>
  )
}

export default ProductItem

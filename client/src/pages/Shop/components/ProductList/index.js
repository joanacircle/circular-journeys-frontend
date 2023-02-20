import React from 'react'
import ProductItem from './ProductItem'
import './ProductList.scss'

const ProductList = ({ displayProducts }) => {

  return (
    <div className="grid-container">
      {displayProducts.map((product) => (
        <ProductItem key={product.p_id} product={product} />
      ))}
    </div>
  )
}

export default ProductList

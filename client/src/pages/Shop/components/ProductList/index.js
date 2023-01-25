import React from 'react'
import ProductItem from './ProductItem'
import './ProductList.scss'

const ProductList = (props) => {
  const { products } = props
  return (
    <div className="grid-container">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList

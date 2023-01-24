import React from 'react'
import ProductItem from './ProductItem'

function ProductList(props) {
  const { products } = props

  return (
    <>
      <div className="table-responsive">
        <table className="table table-hover">
          <tbody>
            {products.map((product, i) => {
              return <ProductItem key={i} product={product} />
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ProductList

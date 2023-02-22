import { useState, useEffect } from 'react'
import ProductItem from './ProductItem'
import './ProductList.scss'

const ProductList = ({ displayProducts }) => {

  const [visibleProducts, setVisibleProducts] = useState(displayProducts.slice(0, 9))

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)

  })

  const handleScroll = () => {
    const scrollPosition = window.innerHeight + window.scrollY
    const documentHeight = document.documentElement.offsetHeight

    if (scrollPosition >= documentHeight) {
      const currentLength = visibleProducts.length
      const nextProducts = displayProducts.slice(currentLength, currentLength + 9)
      setVisibleProducts([...visibleProducts, ...nextProducts])
    }
  }

  return (
    <div className="grid-container">
      {visibleProducts.map((product) => (
        <ProductItem key={product.p_id} product={product} />
      ))}
    </div>
  )
}

export default ProductList

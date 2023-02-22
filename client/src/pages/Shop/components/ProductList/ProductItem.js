import { Link } from 'react-router-dom'
import './ProductItem.scss'

const ProductItem = ({ product }) => {

  return (
    <div className="product-card">

      <div className='card-img'>
        <Link
          to={`product/${product.p_id}`}
          state={{ product }}
        >
          <img src={`${process.env.REACT_APP_DEV_URL}/shop/products/${product.path1}.jpg`} />
        </Link>
      </div>

      <div className='card-info'>
        <Link
          to={`product/${product.p_id}`}
          state={{ product }}
        >
          <p className='card-title'>{product.title}</p>
        </Link>
        <p className='card-price'>${parseFloat(product.price).toLocaleString('zh-TW')}</p>
      </div>

    </div>
  )
}

export default ProductItem

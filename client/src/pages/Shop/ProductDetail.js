import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import './ProductDetail.scss'

import { userInfo } from '../../components/userInfo/UserInfo'

const ProductDetail = () => {
  const location = useLocation()
  const product = location.state?.product
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0)
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const index = Math.floor(scrollPosition / 400)
      setSelectedThumbnailIndex(index)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const { userData } = userInfo()

  const getImgPath = () => {
    const paths = []
    for (let i = 1; i <= 6; i++) {
      const path = product[`path${i}`]
      if (path !== null) {
        paths.push(`${process.env.REACT_APP_DEV_URL}/shop/products/${path}.jpg`)
      }
    }
    return paths
  }

  const img = getImgPath(product)

  const handleThumbnailClick = (index) => {
    window.scrollTo({
      top: index * 450,
      behavior: 'smooth'
    })
  }

  const handleAddToCart = () => {
    const existingCartItems = JSON.parse(localStorage.getItem('cart')) || []

    let cartItemExist = false

    const updatedCartItems = existingCartItems.map((item) => {
      if (item.p_id === product.p_id) {
        item.count = parseInt(item.count) + 1
        cartItemExist = true
      }
      return item
    })

    if (!cartItemExist) {
      const cartItem = {
        p_id: product.p_id,
        title: product.title,
        price: product.price,
        img: img[0],
        count: 1
      }
      updatedCartItems.push(cartItem)
    }
    localStorage.setItem('cart', JSON.stringify(updatedCartItems))
    // window.dispatchEvent(new Event("storage"))
  }

  const handleCheckout = () => {
    if (!userData) {
      localStorage.setItem('loginFromCheckout', true)
      setIsLogin(!isLogin)

    }
  }


  return (
    <>
      <div className='product-detail-page'>
        <div className="product-image-gallery">
          <div className="thumbnails-container">
            {img.map((pic, index) => (

              <img
                className={`thumbnail ${selectedThumbnailIndex === index ? 'selected' : ''}`}
                src={pic}
                alt=""
                key={index}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}

          </div>

          <div className="main-image-container" >
            {img.map((pic, index) => (
              <img className='image-list' src={pic} alt="" key={index} />
            ))}
          </div>

          <div className='info-container-parent'>
            <div className='product-info-container'>
              <div className='product-spec'>
                <h3 className='title-h3'>{product.title}</h3>

              </div>
              <div className='spec-buttons'>
                <hr />
                <p className='desc-p'>{product.product_desc}</p>
                <hr />
                <p className='price-p'>限定價: ${parseFloat(product.price).toLocaleString('zh-TW')}</p>
                <button className='put-kart' onClick={handleAddToCart}>加入購物袋</button>
                <button
                  // to='/checkout'
                  onClick={handleCheckout}
                >
                  <p className='buy-now'>立即購買</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='recommendations'>
          <div className='recommend-list'>

          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail

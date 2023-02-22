import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './ProductDetail.scss'


const ProductDetail = () => {

  const location = useLocation()
  const product = location.state?.product

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

  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0)

  const handleThumbnailClick = (index) => {

    window.scrollTo({
      top: index * 450,
      behavior: 'smooth'
    })
  }

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
                <button className='put-kart'>加入購物袋</button>
                <button className='buy-now'>立即購買</button>
              </div>
            </div>
          </div>
        </div>

        <div className='recommendations'>
          <div className='recommend-list'>
            {/* {sampleData.map((item) => (
              <div key={item.id} className='recommend-product'>
                <img className='rec-img' src={item.img[0]} alt="" />
                <h5>{item.name}</h5>
                <p>Price: ${item.price}</p>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail

import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './ProductDetail.scss'


const ProductDetail = () => {

  const location = useLocation()
  const product = location.state?.product

  const img = [
    `${process.env.REACT_APP_DEV_URL}/shop/products/${product.path1}.jpg`,
    `${process.env.REACT_APP_DEV_URL}/shop/products/${product.path2}.jpg`,
    `${process.env.REACT_APP_DEV_URL}/shop/products/${product.path3}.jpg`,
    `${process.env.REACT_APP_DEV_URL}/shop/products/${product.path4}.jpg`
  ]

  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0)

  const handleThumbnailClick = (index) => {
    // setSelectedThumbnailIndex(index)

    window.scrollTo({
      top: index * 150,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const index = Math.floor(scrollPosition / 150)
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
        <div className="product-detail">
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
            <div className='product-info-container'>
              <div className='product-spec'>
                <h2>{product.title}</h2>
                <p>Price: ${product.price}</p>
                <p>{product.desc}</p>
              </div>
              <div className='spec-buttons'>
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

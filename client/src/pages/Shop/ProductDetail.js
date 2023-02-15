import './data/index'
import './ProductDetail.scss'

import { useState, useRef } from 'react'

const sampleData = [
  {
    id: 1,
    name: '白色T-shirt',
    desc: 'description 123',
    price: 100,
    img: 'https://i.imgur.com/ba3tvGm.jpg'
  },
  {
    id: 2,
    name: '黑色T-shirt',
    desc: 'description 123',
    price: 200,
    img: 'https://i.imgur.com/pHQ3xT3.jpg'
  },
  {
    id: 3,
    name: '咖啡色T-shirt',
    desc: 'description 123',
    price: 300,
    img: 'https://i.imgur.com/1GrakTl.jpg'
  },
  {
    id: 4,
    name: '白色T-shirt',
    desc: 'description 123',
    price: 100,
    img: 'https://i.imgur.com/ba3tvGm.jpg'
  },
  {
    id: 5,
    name: '黑色T-shirt',
    desc: 'description 123',
    price: 200,
    img: 'https://i.imgur.com/pHQ3xT3.jpg'
  },
  {
    id: 6,
    name: '咖啡色T-shirt',
    desc: 'description 123',
    price: 300,
    img: 'https://i.imgur.com/1GrakTl.jpg'
  }
]

const images =
  [
    'https://i.imgur.com/ba3tvGm.jpg',
    'https://i.imgur.com/pHQ3xT3.jpg',
    'https://i.imgur.com/1GrakTl.jpg',
    'https://i.imgur.com/ba3tvGm.jpg',
    'https://i.imgur.com/pHQ3xT3.jpg',
    'https://i.imgur.com/1GrakTl.jpg'

  ]



const ProductDetail = () => {

  const [activeIndex, setActiveIndex] = useState(0)
  const [activeThumbnailIndex, setActiveThumbnailIndex] = useState(0)
  const [recommendations, setRecommendations] = useState([])
  const mainImageContainerRef = useRef(null)

  const handleThumbnailClick = (index) => {
    setActiveIndex(index)
    setActiveThumbnailIndex(index)
    mainImageContainerRef.current.scrollTo({
      top: index * mainImageContainerRef.current.clientHeight,
      behavior: 'smooth'
    })
  }

  const handleMainImageScroll = () => {
    const index = Math.round(mainImageContainerRef.current.scrollTop / mainImageContainerRef.current.clientHeight)
    setActiveIndex(index)
    setActiveThumbnailIndex(index)
  }

  const addRandomRecommendation = () => {
    const shuffledData = sampleData.sort(() => 0.5 - Math.random())
    const selectedData = shuffledData.slice(0, 4)
    setRecommendations(selectedData)
  }

  return (
    <>
      <div className='product-detail-page'>
        <div className="product-detail">
          <div className="product-image-gallery">

            <div className="thumbnail-container">
              {sampleData.map((product, index) => (
                <div className={`thumbnail ${index === activeThumbnailIndex ? 'active' : ''}`} key={`thumbnail-${index}`} onClick={() => handleThumbnailClick(index)}>
                  <img src={product.img} alt={`product-thumbnail-${index}`} />
                </div>
              ))}
            </div>
            <div className="main-image-container" onScroll={handleMainImageScroll} ref={mainImageContainerRef}>
              {images.map((image, index) => (
                <img src={image} alt={`product-${index}`} key={`product-${index}`} className={`main-image ${index === activeIndex ? 'active' : ''}`} />
              ))}
            </div>
            <div className='product-info-container'>
              <div className='product-spec'>

                <div className="product">

                  <h2>{sampleData[0].name}</h2>

                  <p>Price: ${sampleData[0].price}</p>
                  <p>{sampleData[0].desc}</p>
                </div>

              </div>
            </div>
          </div>

        </div>
        <div className='recommendations'>
          <div className='recommend-list'>
            {recommendations.map((item) => (
              <div key={item.id} className='recommend-product'>
                <h2>{item.name}</h2>
                <p>Price: ${item.price}</p>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <button onClick={addRandomRecommendation}>Add Recommendations</button>
        </div>
      </div>
    </>
  )
}

export default ProductDetail

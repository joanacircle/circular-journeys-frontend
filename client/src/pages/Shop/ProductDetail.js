import './data/index'
import './ProductDetail.scss'

import { useState, useEffect } from 'react'

const sampleData = [
  {
    id: 1,
    name: '白色T-shirt',
    desc: 'description 123',
    price: 100,
    img: [
      'https://i.imgur.com/ba3tvGm.jpg',
      'https://i.imgur.com/pHQ3xT3.jpg',
      'https://i.imgur.com/1GrakTl.jpg',
      'https://i.imgur.com/ba3tvGm.jpg',
      'https://i.imgur.com/pHQ3xT3.jpg'

    ]
  },

  {
    id: 2,
    name: '黑色T-shirt',
    desc: 'description 123',
    price: 200,
    img: ['https://i.imgur.com/pHQ3xT3.jpg']
  },
  {
    id: 3,
    name: '咖啡色T-shirt',
    desc: 'description 123',
    price: 300,
    img: ['https://i.imgur.com/1GrakTl.jpg']
  },
  {
    id: 4,
    name: '白色T-shirt',
    desc: 'description 123',
    price: 100,
    img: ['https://i.imgur.com/ba3tvGm.jpg']
  },
  {
    id: 5,
    name: '黑色T-shirt',
    desc: 'description 123',
    price: 200,
    img: ['https://i.imgur.com/pHQ3xT3.jpg']
  },
  {
    id: 6,
    name: '咖啡色T-shirt',
    desc: 'description 123',
    price: 300,
    img: ['https://i.imgur.com/1GrakTl.jpg']
  }
]


const ProductDetail = () => {

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
              {sampleData[0].img.map((pic, index) => (
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
              {sampleData[0].img.map((pic, index) => (
                <img className='image-list' src={pic} alt="" key={index} />
              ))}
            </div>
            <div className='product-info-container'>
              <div className='product-spec'>
                <h2>{sampleData[0].name}</h2>
                <p>Price: ${sampleData[0].price}</p>
                <p>{sampleData[0].desc}</p>
              </div>
              <div className='spec-buttons'>
                <button className='put-kart'>放入購物包</button>
                <button className='buy-now'>立即購買</button>
              </div>
            </div>
          </div>
        </div>
        <div className='recommendations'>
          <div className='recommend-list'>
            {sampleData.map((item) => (
              <div key={item.id} className='recommend-product'>
                <img className='rec-img' src={item.img[0]} alt="" />
                <h5>{item.name}</h5>
                <p>Price: ${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail

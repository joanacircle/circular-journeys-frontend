import { Link } from 'react-router-dom'
import './HomeShop.scss'

const HomeShop = () => {

  const categories = [
    { title: '戶外登山', image: `${process.env.REACT_APP_DEV_URL}/shop/shop-home/shop1.jpg` },
    { title: '背包收納', image: `${process.env.REACT_APP_DEV_URL}/shop/shop-home/shop2.jpg` },
    { title: '行動配備', image: `${process.env.REACT_APP_DEV_URL}/shop/shop-home/shop3.jpg` },
    { title: '旅行配件', image: `${process.env.REACT_APP_DEV_URL}/shop/shop-home/shop4.jpg` }
  ]

  const handleLink = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>

      <div className="images-container">
        <div>
          <h3 className='image-banner-text'>在我們商城打開最佳冒險旅程!
          </h3>
        </div>
        <div className="bottom-row">
          {categories.map((category, index) => (
            <div key={index} className="image-box">
              <Link
                to='/shop'
                state={{ categoryTitle: category.title }}
                onClick={handleLink}
              >
                <img
                  src={category.image}
                  alt={category.title} className="responsive-image" />
                <p className='cate-text'>
                  {category.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default HomeShop

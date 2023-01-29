import { Link } from 'react-router-dom'
import image1 from '../../../images/shop/categories/shop1.jpg'
import image2 from '../../../images/shop/categories/shop2.jpg'
import image3 from '../../../images/shop/categories/shop3.jpg'
import image4 from '../../../images/shop/categories/shop4.jpg'
import image5 from '../../../images/shop/categories/shop5.jpg'
import './HomeShop.scss'

const HomeShop = () => {
  return (
    <>
      <div className="images-container">
        <div className="top-row">
          <div className="image-box">
            <Link to='/shop'>
              <img src={image2} alt="" className="responsive-image" />
            </Link>
          </div>
          <div className="image-box">
            <Link to='/shop'>
              <img src={image1} alt="" className="responsive-image" />
            </Link>
          </div>
        </div>

        <div className="bottom-row">
          <div className="image-box">
            <Link to='/shop'>
              <img src={image4} alt="" className="responsive-image" />
            </Link>
          </div>
          <div className="image-box">
            <Link to='/shop'>
              <img src={image3} alt="" className="responsive-image" />
            </Link>
          </div>
          <div className="image-box">
            <Link to='/shop'>
              <img src={image5} alt="" className="responsive-image" />
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}

export default HomeShop

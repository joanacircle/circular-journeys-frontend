import image1 from '../../images/shop/categories/shop1.jpg'
import image2 from '../../images/shop/categories/shop2.jpg'
import image3 from '../../images/shop/categories/shop3.jpg'
import image4 from '../../images/shop/categories/shop4.jpg'
import image5 from '../../images/shop/categories/shop5.jpg'
import './HomeShop.css'

const HomeShop = () => {
  return (
    <>
      <section className="images-container">
        <div className="top-row">
          <a href="https://www.example.com">
            <img src={image2} alt="" className="responsive-image" />
          </a>
          <a href="https://www.example.com">
            <img src={image1} alt="" className="responsive-image" />
          </a>
        </div>
        <div className="bottom-row">
          <a href="https://www.example.com">
            <img src={image3} alt="" className="responsive-image" />
          </a>
          <a href="https://www.example.com">
            <img src={image4} alt="" className="responsive-image" />
          </a>
          <a href="https://www.example.com">
            <img src={image5} alt="" className="responsive-image" />
          </a>
        </div>
      </section>
    </>
  )
}

export default HomeShop

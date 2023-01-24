import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="footer-items">
              <h5>Circular Journeys</h5>
              <p>Explore the world in a circular way</p>
            </div>
            <div className="footer-items">
              <h5>Follow Us</h5>
              <p className='follow-us'>
                <Link to="#"><BsFacebook size={20} /></Link>
                <Link to="#"><BsTwitter size={20} /></Link>
                <Link to="#"><BsInstagram size={20} /></Link>
              </p>
            </div>
            <div className="footer-items">
              <h5><Link to="#">About Us</Link></h5>
              <p>
                <Link to='info@circularjourneys.com'>Email: info@circularjourneys.com
                </Link>
              </p>

            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">Copyright &copy; Circular Journeys 2023</p>
            </div>
          </div>
        </div >
      </footer >
    </>
  )
}

export default Footer

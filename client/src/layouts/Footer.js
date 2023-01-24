import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import './Footer.scss'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Circular Journeys</h5>
              <p>Explore the world in a circular way</p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Destinations</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <ul>
                <li>Email: info@circularjourneys.com</li>
                <li>Phone: +1 555 555 555</li>
              </ul>
              <p>
                Follow us on
                <a href="#"><BsFacebook /></a>
                <a href="#"><BsTwitter /></a>
                <a href="#"><BsInstagram /></a>

              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">Copyright &copy; Circular Journeys 2022</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

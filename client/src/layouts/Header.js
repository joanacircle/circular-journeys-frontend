import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/Logo/Logo'
import './Header.scss'
import { FaUserAlt } from 'react-icons/fa'
import { BiShoppingBag } from 'react-icons/bi'
import { ShoppingCart } from 'components/ShoppingCart/ShoppingCart'
import LoginModal from 'pages/User/Login/LoginModal'

const Header = () => {

  // for modals
  const [modalVisibility, setModalVisibility] = useState(false)
  const [loginModal, setLoginModal] = useState(false)

  // shopping cart
  const toggleModal = () => {
    setModalVisibility(!modalVisibility)
  }

  // Login modal
  const handleToggleLoginModal = () => {
    setLoginModal(!loginModal)
  }

  return (
    <>
      <header>
        <div className='navbar-content'>
          <Link
            to="/"
            className='brand'
          ><Logo />
            <span className='title'><h1>Circular Journeys</h1></span>
          </Link>
          <section className='header-section'>
            <ul className='header-ul'>
              <li className='header-li'>
                <Link to='/blog' title='Blog'>
                  <h5 className='links'>部落格</h5>
                </Link>
              </li>

              <li className='header-li'>
                <Link to='/'>
                  <h5 className='links'>自由行</h5>
                </Link>
              </li>
              <li className='header-li'>
                <Link to='/shop'>
                  <h5 className='links'>商城</h5>
                </Link>
              </li>
              <li className='header-li'>
                <button onClick={toggleModal}>
                  <BiShoppingBag size={32} />
                </button>
              </li>
              <li className='header-li'>
                <button onClick={handleToggleLoginModal}>
                  <FaUserAlt size={25} />
                </button>
              </li>
            </ul>
          </section>
        </div>

        <div className='login-modal'>
          {
            loginModal &&
            <LoginModal handleToggleLoginModal={handleToggleLoginModal} />
          }
        </div>
        
        {modalVisibility &&
          <ShoppingCart
            modalVisibility={modalVisibility}
            setModalVisibility={setModalVisibility}
            toggleModal={toggleModal}
          />}
          
      </header>

    </>
  )
}

export default Header


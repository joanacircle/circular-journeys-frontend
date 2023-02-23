import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/Logo/Logo'
import './Header.scss'

// icons
import { FaUserCircle } from 'react-icons/fa'
import { BiShoppingBag } from 'react-icons/bi'
import { BsCircleFill } from 'react-icons/bs'

// components
import { ShoppingCart } from 'components/ShoppingCart/ShoppingCart'
import LoginModal from 'pages/User/Login/LoginModal'
import DropdownMenu from 'pages/User/DropdownMenu/DropdownMenu'
import { useIsLoggedIn } from 'hooks/useIsLoggedIn'

const Header = () => {
  // for drop down
  const [userMenu, setUserMenu] = useState(false)

  // for modals
  const [loginModal, setLoginModal] = useState(false)
  const { isLogin } = useIsLoggedIn()

  // shopping cart
  const [modalVisibility, setModalVisibility] = useState(false)
  const toggleModal = () => {
    setModalVisibility(!modalVisibility)
  }


  // Login modal
  const handleToggleLoginModal = () => (
    isLogin.state ? setUserMenu(!userMenu) : setLoginModal(!loginModal)
  )

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
                <Link to='/tour'>
                  <h5 className='links'>自由行</h5>
                </Link>
              </li>
              <li className='header-li'>
                <Link to='/shop'>
                  <h5 className='links'>商城</h5>
                </Link>
              </li>
              <li className='header-li'>
                <button className='cart-button' onClick={toggleModal}>
                  <BiShoppingBag size={32} />
                  <div className='bs-circle-fill'><BsCircleFill size={19} /></div>
                </button>
                <ul>
                  <li>
                    {
                      userMenu &&
                      <DropdownMenu
                        handleToggleLoginModal={handleToggleLoginModal}
                      />
                    }
                  </li>
                </ul>
              </li>
              <li className='header-li'>
                <button
                  onClick={handleToggleLoginModal}>
                  <FaUserCircle id='user-menu' size={30} />
                </button>
              </li>
            </ul>
          </section>
        </div>
        {
          loginModal &&
          <LoginModal
            loginModal={loginModal}
            handleToggleLoginModal={handleToggleLoginModal}
          />
        }
        {
          modalVisibility &&
          <ShoppingCart
            modalVisibility={modalVisibility}
            setModalVisibility={setModalVisibility}
            toggleModal={toggleModal}
          />
        }

      </header>
    </>
  )
}

export default Header


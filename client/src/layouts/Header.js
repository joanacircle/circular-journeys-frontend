import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/Logo/Logo'
import './Header.scss'

// icons
import { FaUserCircle } from 'react-icons/fa'
import { BiShoppingBag } from 'react-icons/bi'

// components
import { CartCountContext } from '../components/ShoppingCart/CartCountProvider'
import { ShoppingCart } from 'components/ShoppingCart/ShoppingCart'
import LoginModal from 'pages/User/Login/LoginModal'
import DropdownMenu from 'pages/User/DropdownMenu/DropdownMenu'
import { userInfo } from 'components/userInfo/UserInfo'
import { useIsLoggedIn } from '../hooks/useIsLoggedIn'

const Header = () => {

  const { count } = useContext(CartCountContext)

  // for drop down
  const [userMenu, setUserMenu] = useState(false)

  // for modals
  const [loginModal, setLoginModal] = useState(false)

  // shopping cart modal
  const [cartVisibility, setCartVisibility] = useState(false)
  const toggleModal = () => {
    setCartVisibility(!cartVisibility)
  }

  const { userData } = userInfo()
  const { isLogin } = useIsLoggedIn()

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
                  <div className='cart-count'>{count}</div>
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
                <button onClick={handleToggleLoginModal}>
                  {
                    !userData.member_id
                      ? <FaUserCircle id='user-menu' color='#555' size={40} />
                      : (
                        <img
                          id='user-menu'
                          className="user-img"
                          src={
                            userData.picture
                              ? userData.picture
                              : 'https://react.semantic-ui.com/images/wireframe/image.png'
                          }
                          title='User-Picture'
                        />
                      )
                  }
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
          cartVisibility &&
          <ShoppingCart
            toggleModal={toggleModal}
          />
        }

      </header>
    </>
  )
}

export default Header


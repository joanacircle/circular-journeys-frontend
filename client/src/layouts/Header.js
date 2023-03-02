
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
import DropdownMenu from 'pages/User/DropdownMenu/DropdownMenu'
import Context from 'components/Context'
import LoginModal from 'pages/User/Login/LoginModal'
import { userInfo } from '../components/userInfo/UserInfo'

const Header = () => {

  const { count } = useContext(CartCountContext)

  // for drop down
  const [dropdownMenu, setDropdownMenu] = useState(false)
  // login modal
  const { isLogin, setIsLogin, modal, setModal } = useContext(Context)
  // shopping cart modal
  const [cartVisibility, setCartVisibility] = useState(false)
  const toggleModal = () => {
    setCartVisibility(!cartVisibility)
  }

  const { userData } = userInfo()

  // dropdown menu
  const handleDropMenu = () => (
    isLogin.userState && setDropdownMenu(!dropdownMenu)

  )
  // login modal
  const handleLoginModal = () => {
    setModal(!modal)
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
                      dropdownMenu &&
                      <DropdownMenu
                        setDropdownMenu={setDropdownMenu}
                        dropdownMenu={dropdownMenu}
                      />
                    }
                  </li>
                </ul>
              </li>
              <li className='header-li'>
                <button>
                  {
                    !isLogin?.userState
                      ? <FaUserCircle
                        id='user-menu'
                        color='#555'
                        size={40}
                        onClick={handleLoginModal}
                      />
                      : (
                        <img
                          id='user-menu'
                          className="user-img"
                          src={
                            isLogin?.userData.picture
                              ? isLogin?.userData.picture
                              : 'https://react.semantic-ui.com/images/wireframe/image.png'
                          }
                          title='User-Picture'
                          onClick={handleDropMenu}
                        />
                      )
                  }
                </button>
              </li>
            </ul>
          </section>
        </div>
        {
          modal && <LoginModal />
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


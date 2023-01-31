import { Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../images/Logo/Logo'

import './Header.scss'
import { FaUserAlt } from 'react-icons/fa'
import { BiShoppingBag } from 'react-icons/bi'



const Header = () => {

  const [modalVisibility, setModalVisibility] = useState(false)

  const toggleModal = () => {
    setModalVisibility(!modalVisibility)
  }
  const closeModal = (event) => {
    if (event.target === event.currentTarget) {
      toggleModal()
    }
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
          <section>
            <ul>
              <li>
                <Link to='/blog' title='Blog'>
                  <span className='links'>部落格</span>
                </Link>
              </li>

              <li>
                <Link to='/'>
                  <span className='links'>自由行</span>
                </Link>
              </li>
              <li>
                <Link to='/shop'>
                  <span className='links'>商城</span>
                </Link>
              </li>
              <li>
                <button onClick={toggleModal}>
                  <BiShoppingBag size={30} />
                </button>
              </li>
              <li>
                <Link to='/login'>
                  <FaUserAlt size={30} />
                </Link>
              </li>
            </ul>
          </section>
        </div>

        <div className='cart'>
          {modalVisibility && (
            <div className="modal-background" onClick={closeModal}>
              <div className="modal-content">
                <div className="close-button">
                  <button onClick={toggleModal}>&times;</button>
                </div>

                <h1>hi im modal</h1>
                <h5 className="text-danger">
                  <Link onClick={toggleModal} to="../checkout" title="結帳">結帳</Link>
                </h5>

                <button onClick={toggleModal}>Close</button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}

export default Header


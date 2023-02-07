import { Link } from 'react-router-dom'
import './ShoppingCart.scss'
import 'animate.css'
import { useEffect } from 'react'

export const ShoppingCart = (props) => {

  const {
    modalVisibility,
    setModalVisibility,
    toggleModal
  } = props

  const closeModal = (event) => {
    if (event.target === event.currentTarget) {
      toggleModal()
    }
  }



  return (
    <>
      <div className='cart'>

        <div className="modal-background animate__animated animate__fadeIn animate__faster" onClick={closeModal}>

        </div>
        <div className='modal-content animate__animated animate__slideInRight animate__faster'>

          <div className="close-button">
            <button className='close-button-button' onClick={toggleModal}>&times;</button>
          </div>


          <h5 className='modal-title'>我的購物袋</h5>
          <hr className='cart-separator' />
          <h5 className="text-danger">
            <Link onClick={toggleModal} to="../checkout" title="結帳">結帳</Link>
          </h5>

          <button onClick={toggleModal}>Close</button>
        </div>
      </div>
    </>
  )
}

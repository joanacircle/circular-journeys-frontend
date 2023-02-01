import { Link } from 'react-router-dom'
import './ShoppingCart.scss'

export const ShoppingCart = (props) => {

  const {
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

        <div className="modal-background" onClick={closeModal}>
          <div className="modal-content">
            <div className="close-button">
              <button className='close-button-button' onClick={toggleModal}>&times;</button>
            </div>

            <h5 className='modal-title'>我的購物袋</h5>
            <h5 className="text-danger">
              <Link onClick={toggleModal} to="../checkout" title="結帳">結帳</Link>
            </h5>

            <button onClick={toggleModal}>Close</button>
          </div>
        </div>

      </div>
    </>
  )
}

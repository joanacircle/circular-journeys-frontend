import { useState } from 'react'
import 'animate.css'
import './Alert.scss'

const Alert = (props) => {
  const { message, cancel, confirm } = props
  const [content, setContent] = useState(false)
  function handelClick() {
    setContent(!content)
  }
  return (
      <div className='alert-background' onClick={handelClick}>
        <div className='alert-container'>
          <p className='message'>{message}</p>
          <ul className='alert-footer'>
            <li onClick={cancel}>取消</li>
            <li onClick={confirm}>確定</li>
          </ul>
        </div>
      </div>
  )
}

export default Alert

import './CheckoutBar.scss'
import Logo from 'images/Logo/Logo'
import { BsFlagFill } from 'react-icons/bs'
import { IoHomeSharp } from 'react-icons/io5'

export const CheckoutBar = ({ maxSteps, step, stepNames }) => {

  return (
    <>
      <div className="checkoutbar-container">
        <Logo
          className={`car
            ${step === 1
              ? 'move'
              : step === 2
                ? 'move2'
                : step === 3
                  ? 'move3'
                  : ''
            }`}
        />
        <BsFlagFill className='flag' />
        <IoHomeSharp className='home' />
        <ul className="checkoutbar">

          {Array(maxSteps)
            .fill(1) // 改變內容為1
            .map((v, i) => {
              return (
                <li key={i} className={i + 1 <= step ? 'active' : ''}>
                  {stepNames[i]}
                </li>
              )
            })
          }

        </ul>
      </div>
    </>
  )
}

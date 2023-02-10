import './CheckoutBar.scss'
import Logo from 'images/Logo/Logo'
import { BsFlagFill } from 'react-icons/bs'

export const CheckoutBar = ({ maxSteps, step, stepNames }) => {

  return (
    <>
      <div className="checkoutbar-container">
        <ul className="checkoutbar">
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
          <BsFlagFill className='flag' />
        </ul>
      </div>
    </>
  )
}

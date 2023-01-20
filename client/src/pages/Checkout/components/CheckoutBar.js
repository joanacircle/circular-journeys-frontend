import './CheckoutBar.scss'

import React from 'react'

export const CheckoutBar = (props) => {
  const { maxSteps, step, stepNames } = props
  return (
    <>
      <div className="container">
        <ul className="progressbar">
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

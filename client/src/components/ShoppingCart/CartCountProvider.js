import { createContext, useContext, useState } from 'react'

export const CartCountContext = createContext()

export const CartCountProvider = ({ children }) => {
  const [count, setCount] = useState()

  const updateCount = (cartItems) => {
    let qty = 0
    for (let i = 0; i < cartItems.length; i++) {
      qty += +cartItems[i].count
    }
    setCount(qty)
  }
  return (
    <CartCountContext.Provider value={{ count, updateCount }}>
      {children}
    </CartCountContext.Provider>

  )
}

import { createContext, useContext, useState } from 'react'

export const CartCountContext = createContext()

export const CartCountProvider = ({ children }) => {
  const [count, setCount] = useState(localStorage.getItem('cart-count') || 0)

  const updateCount = (amount) => {

    setCount(amount)

  }
  return (
    <CartCountContext.Provider value={{ count, updateCount }}>
      {children}
    </CartCountContext.Provider>

  )
}

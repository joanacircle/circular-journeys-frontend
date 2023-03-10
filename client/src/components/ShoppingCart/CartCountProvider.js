import { createContext, useEffect, useState } from 'react'

export const CartCountContext = createContext()

export const CartCountProvider = ({ children }) => {
  const [count, setCount] = useState()
  const [total, setTotal] = useState()

  const updateCount = (cartItems) => {
    let qty = 0
    for (let i = 0; i < cartItems.length; i++) {
      qty += +cartItems[i].count
    }
    setCount(qty)
  }

  const updateTotal = (cartItems) => {
    let price = 0

    for (let i = 0; i < cartItems.length; i++) {
      price += cartItems[i].count * cartItems[i].price
    }
    setTotal(price)
  }

  useEffect(() => {
    const existingCartItems = JSON.parse(localStorage.getItem('cart')) || []
    updateCount(existingCartItems)
    updateTotal(existingCartItems)
  }, [])

  return (
    <CartCountContext.Provider value={{ count, updateCount, total, updateTotal }}>
      {children}
    </CartCountContext.Provider>

  )
}

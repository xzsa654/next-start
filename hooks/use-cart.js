'use client'

import { createContext, useState, useEffect, useContext } from 'react'

const CartContext = createContext(null)

CartContext.displayName = 'CartContext'

export function CartProvider({ children }) {
  const [carts, setCarts] = useState([])
  const handleIncrease = (id) => {
    const nextCart = carts.map((item) =>
      id == item.id ? { ...item, count: item.count + 1 } : item
    )
    setCarts(nextCart)
  }
  const handleDecrease = (id) => {
    let nextCart = carts.map((item) =>
      id == item.id ? { ...item, count: item.count - 1 } : item
    )
    setCarts(nextCart)
  }
  const handleRemove = (id) => {
    const nextCarts = carts.filter((item) => {
      return item.id != id
    })
    setCarts(nextCarts)
  }
  const totalQty = carts.reduce((acc, item) => acc + item.count, 0)
  const totalAmount = carts.reduce(
    (acc, item) => acc + item.count * item.price,
    0
  )

  const addItem = (product) => {
    const foundIndex = carts.findIndex((v) => v.id == product.id)
    if (foundIndex !== -1) {
      handleIncrease(product.id)
    } else {
      const newItem = { ...product, count: 1 }
      const nextItem = [...carts, newItem]
      setCarts(nextItem)
    }
  }

  return (
    <CartContext.Provider
      value={{carts,handleIncrease ,handleDecrease, handleRemove, totalQty, totalAmount, addItem }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)

'use client'

import next from 'next'
import React, { useState, useEffect } from 'react'

// 創建商品資料(不會操作)
const productData = [
  {
    id: 1,
    name: 'JS',
    price: 100,
  },
  {
    id: 2,
    name: 'React',
    price: 100,
  },
  {
    id: 3,
    name: 'Nodejs',
    price: 100,
  },
]
const cartData = []

export default function Cart2Page(props) {
  const [cart, setCart] = useState(cartData)
  const products = productData.map((product) => {
    return (
      <li key={product.id}>
        {product.name} ({product.price}NT){' '}
        <button
          onClick={() => {
            handlerAddCart(product)
          }}
        >
          加入購物車
        </button>
      </li>
    )
  })

  const carts = cart.map((item) => {
    return (
      <li key={item.id}>
        {item.name} ({item.price}NT) x {item.count}
        <button onClick={() => handlerCartIncrease(item.id)}>+1</button>
        <button
          onClick={() => {
            const nextCount = item.count - 1
            nextCount > 0
              ? handlerCartUncrease(item.id)
              : handlerRemove(item.id)
          }}
        >
          -1
        </button>
        <button onClick={() => handlerRemove(item.id)}>刪除</button>
      </li>
    )
  })

  const handlerAddCart = (product) => {
    const foundIndex = cart.findIndex((v) => v.id == product.id)
    if (foundIndex !== -1) {
      handlerCartIncrease(product.id)
    } else {
      const addProduct = { ...product, count: 1 }
      const nextCart = [addProduct, ...cart]
      setCart(nextCart)
    }
  }
  const handlerCartIncrease = (productId) => {
    const nextCart = cart.map((r) => {
      return productId == r.id ? { ...r, count: r.count + 1 } : r
    })
    setCart(nextCart)
  }
  const handlerCartUncrease = (id) => {
    const nextCart = cart.map(
      (r) => (id = r.id ? { ...r, count: r.count - 1 } : r)
    )
    setCart(nextCart)
  }
  const handlerRemove = (id) => {
    const nextCart = cart.filter((r) => r.id !== id)
    setCart(nextCart)
  }
  const totalQty = cart.reduce((acc, v) => acc + v.count, 0)
  const totalAmount = cart.reduce((acc, v) => acc + v.count * v.price, 0)
  return (
    <>
      <h1>商品一覽</h1>
      <ul>{products}</ul>
      <hr />
      <h2>我的購物車</h2>
      <ul>{carts}</ul>
      <hr />
      總金額:{totalAmount} 總數量:{totalQty}
    </>
  )
}

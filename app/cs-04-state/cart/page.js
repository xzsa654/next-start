'use client'

import next from 'next'
import { useState } from 'react'
// 購物車預設資料
const initialCarts = [
  {
    id: 0,
    name: '小熊餅乾',
    price: 77,
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    price: 87,
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    price: 67,
    count: 2,
  },
]
// 商品資料
const productList = [
  {
    id: 0,
    name: '小熊餅乾',
    price: 77,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    price: 87,
  },
  {
    id: 2,
    name: '小老板海苔',
    price: 67,
  },
]

export default function ShoppingCartPage() {
  const [carts, setCarts] = useState(initialCarts)
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

  const cartMap = carts.map((item) => (
    <li key={item.id}>
      {item.name} ({item.price}元) (<b>{item.count}</b>)
      <button onClick={() => handleIncrease(item.id)}>+</button>
      <button
        onClick={() => {
          const nextCount = item.count - 1
          nextCount < 1 ? handleRemove(item.id) : handleDecrease(item.id)
        }}
      >
        –
      </button>
      <button
        onClick={() => {
          handleRemove(item.id)
        }}
      >
        {'刪除'}
      </button>
    </li>
  ))
  const productMap = productList.map((v) => {
    return (
      <li key={v.id}>
        {v.name} ({v.price})
        <button
          onClick={() => {
            addItem(v)
          }}
        >
          添加購物車
        </button>
      </li>
    )
  })
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
    <>
      <h2>產品列表</h2>
      <ul> {productMap}</ul>
      <h2>{'購物車'}</h2>
      <ul>{cartMap}</ul>
      <hr />
      <h2>
        總數量:{totalQty} | 總金額:{totalAmount}
      </h2>
    </>
  )
}

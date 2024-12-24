'use client'

import React, { useState, useEffect } from 'react'
import { useCart } from '@/hooks/use-cart'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify'

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

export default function ProductPage(props) {
  const send = (item, itemName) => {
    toast.success(`${itemName}以添加至購物車`)
    addItem(item)
  }
  const { addItem } = useCart()
  const productMap = productList.map((v) => {
    return (
      <li key={v.id}>
        {v.name} ({v.price})
        <button
          onClick={() => {
            send(v, v.name)
          }}
        >
          添加購物車
        </button>
      </li>
    )
  })
  return (
    <>
      <h1>商品列表</h1>
      <Link href="./shopping-cart">購物車</Link>
      <ul>{productMap}</ul>
      <ToastContainer />
    </>
  )
}

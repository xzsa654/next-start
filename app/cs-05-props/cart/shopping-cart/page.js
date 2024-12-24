'use client'

import React, { useState, useEffect } from 'react'
import { useCart } from '@/hooks/use-cart'
import Link from 'next/link'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
export default function ShoppingCartPage(props) {
  const mySwal = withReactContent(Swal)
  const confirm = (itemId, itemName) => {
    mySwal
      .fire({
        title: `是否要刪除${itemName}`,
        text: 'Yes, do it!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, do it!',
      })
      .then((result) => {
        if (result.isConfirmed) {
          handleRemove(itemId)
          Swal.fire({
            title: `刪除了${itemName}!`,
            icon: 'success',
          })
        }
      })
  }
  const {
    carts,
    handleDecrease,
    handleIncrease,
    handleRemove,
    totalQty,
    totalAmount,
  } = useCart()

  const cartMap = carts.map((item) => (
    <li key={item.id}>
      {item.name} ({item.price}元) (<b>{item.count}</b>)
      <button onClick={() => handleIncrease(item.id)}>+</button>
      <button
        onClick={() => {
          const nextCount = item.count - 1
          nextCount < 1 ? confirm(item.id, item.name) : handleDecrease(item.id)
        }}
      >
        –
      </button>
      <button
        onClick={() => {
          confirm(item.id, item.name)
        }}
      >
        {'刪除'}
      </button>
    </li>
  ))
  return (
    <>
      <h1>購物車</h1>
      <Link href="./product">商品列表</Link>

      <ul>{cartMap}</ul>
      <h2>
        總數量:{totalQty} | 總金額:{totalAmount}
      </h2>
    </>
  )
}

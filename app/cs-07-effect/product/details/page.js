'use client'

import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
export default function DetailsPage(props) {
  const searchParams = useSearchParams()
  const productCode = searchParams.get('productCode')
  const [product, setProduce] = useState({})
  const getProduct = async (p) => {
    const res = await fetch(
      `https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/${p}`
    )
    const data = await res.json()
    setProduce(data)
  }
  useEffect(() => {
    getProduct(productCode)
  }, [])
  return (
    <>
      <h1>商品詳細頁</h1>
      <p>{product.name}</p>
      <p>{product.price}</p>
    </>
  )
}

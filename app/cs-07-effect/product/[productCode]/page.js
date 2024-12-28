'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import { MoonLoader } from 'react-spinners'
export default function ProductCodePage() {
  const params = useParams()
  const router = useRouter()
  if (
    params.productCode == isNaN ||
    params.productCode < 0 ||
    params.productCode > 8
  ) {
    router.push('/cs-07-effect/product')
  }
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState({
    id: 0,
    picture: '',
    stock: 0,
    name: '',
    price: 0,
    tags: '',
  })
  const getProduct = async (productCode) => {
    const res = await fetch(
      `https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/${productCode}`
    )
    const data = await res.json()
    setProduct(data)
    setLoading(false)
  }
  useEffect(() => {
    getProduct(params.productCode)
  }, [])
  return (
    <>
      {loading ? (
        <MoonLoader />
      ) : (
        <div>
          <h1>商品詳細頁</h1>
          <hr />
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      )}
    </>
  )
}

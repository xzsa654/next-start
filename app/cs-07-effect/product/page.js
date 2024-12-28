'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { MoonLoader } from 'react-spinners'
export default function ProductPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const getProducts = async () => {
    const res = await fetch(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'
    )
    const data = await res.json()
    setProducts(data)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }
  useEffect(() => {
    getProducts()
  }, [])
  const spiner = (
    <>
      <MoonLoader />
    </>
  )
  const display = (
    <>
      <h1>商品列表頁(使用useParams)</h1>
      <ul>
        {products.map((product, i) => {
          return (
            <li key={product.id}>
              <Link
                className="font-bold"
                href={`/cs-07-effect/product/${product.id}`}
              >
                {product.name}/{product.price}元
              </Link>
            </li>
          )
        })}
      </ul>
      <hr />
      <h1>商品列表頁(使用useSearchParams)</h1>
      <ul>
        {products.map((product, i) => {
          return (
            <li key={product.id}>
              <Link
                className="font-bold"
                href={`/cs-07-effect/product/details?productCode=${product.id}`}
              >
                {product.name}/{product.price}元
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
  return <>{loading ? spiner : display}</>
}

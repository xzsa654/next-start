'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { MoonLoader } from 'react-spinners'
import useSWR from 'swr'
export default function ProductPage() {
  const fetcher = (url) => fetch(url).then((r) => r.json())
  const { data, loading, error } = useSWR(
    `https://my-json-server.typicode.com/eyesofkids/json-fake-data/products`,
    fetcher
  )
  const spiner = (
    <>
      <MoonLoader />
    </>
  )
  const display = (
    <>
      <h1>商品列表頁(使用useParams)</h1>
      <ul>
        {data?.map((product, i) => {
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
        {data?.map((product, i) => {
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

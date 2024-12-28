'use client'

import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import useSWR from 'swr'
export default function DetailsPage(props) {
  const searchParams = useSearchParams()
  const p = searchParams.get('productCode')
  const fetcher = (url) => fetch(url).then((r) => r.json())

  const { data, error, isLoading } = useSWR(
    `https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/${p}`,
    fetcher
  )

  return (
    <>
      <h1>商品詳細頁</h1>
      <p>{data?.name}</p>
      <p>{data?.price}</p>
    </>
  )
}

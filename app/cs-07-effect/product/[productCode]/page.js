'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import { MoonLoader } from 'react-spinners'
import useSWR from 'swr'
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
  const fetcher = (url) => fetch(url).then((r) => r.json())
  const { data, error, isloading } = useSWR(
    `http://localhost:3005/api/posts/${params.productCode}`,
    fetcher
  )

  return (
    <>
      {isloading ? (
        <MoonLoader />
      ) : (
        <div>
          <h1>商品詳細頁</h1>
          <hr />
          <p>{data?.data?.title}</p>
          <p>{data?.data?.content}</p>
        </div>
      )}
    </>
  )
}

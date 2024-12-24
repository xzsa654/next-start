'use client'

import React, { useRef } from 'react'

export default function Page(props) {
  const inputRef = useRef(null)
  return (
    <>
      <h1>不受控物件</h1>
      <input type="text" />
    </>
  )
}

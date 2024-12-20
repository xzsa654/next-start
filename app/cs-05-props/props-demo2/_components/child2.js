'use client'
import Parent from './parent.js'

import React, { useState, useEffect } from 'react'

export default function Child2({ setCtop = () => {} }) {
  useEffect(() => {
    setCtop('不經過按鈕(初始預設)')
  }, [])
  return (
    <>
      <div>Child2</div>
      <button
        onClick={() => {
          setCtop('我要把資料回給父母')
        }}
      >
        孝敬父母
      </button>
    </>
  )
}

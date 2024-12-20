'use client'

import React, { useState, useEffect } from 'react'

export default function Wawa({ food = '', setEmotion = () => {} }) {
  useEffect(() => {
    setEmotion('雪吻巧克力')
  }, [])
  return (
    <>
      <h2>(C)Wawa部分</h2>
      <div> {food}</div>

      <button
        onClick={() => {
          setEmotion('GODIVA')
        }}
      >
        送男友巧克力
      </button>
      <hr />
    </>
  )
}

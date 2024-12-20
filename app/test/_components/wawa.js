'use client'

import React, { useState, useEffect } from 'react'

export default function Wawa({ food = '', setMemory = () => {} }) {
  useEffect(() => {
    setMemory('雪吻巧克力')
  }, [])
  return (
    <>
      <div>Wawa部分</div>
      <div> {food}</div>

      <button onClick={() => {}}>送男友巧克力</button>
      <hr />
    </>
  )
}

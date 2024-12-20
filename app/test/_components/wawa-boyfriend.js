'use client'

import React, { useState, useEffect } from 'react'
import Wawa from './wawa.js'
import Oldwang from './oldwang.js'
export default function WawaBoyfriend(props) {
  const [memory, setMemory] = useState('')
  return (
    <>
      <div>WawaBoyfriend</div>
      <div>收到禮物:{memory}</div>
      <hr />
      <div>
        <Wawa food={'便當'} setMemory={setMemory} />
        <Oldwang memory={memory}/>
      </div>
    </>
  )
}

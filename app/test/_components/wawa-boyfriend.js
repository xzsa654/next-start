'use client'

import React, { useState, useEffect } from 'react'
import Wawa from './wawa.js'
import Oldwang from './oldwang.js'
export default function WawaBoyfriend(props) {
  const [emotion, setEmotion] = useState('')
  return (
    <>
      <h2>(P)WawaBoyfriend</h2>
      <div>收到禮物:{emotion}</div>
      <hr />
      <div>
        <Wawa food={'便當'} setEmotion={setEmotion} />
        <Oldwang emotion={emotion} />
      </div>
    </>
  )
}

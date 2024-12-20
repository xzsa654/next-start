'use client'

import React, { useState, useEffect } from 'react'
import Child1 from './child1'
import Child2 from './child2'
export default function Parent(props) {
  const [sendData, setSendData] = useState('給子女的資料')
  const [cToP, setCtop] = useState('開心等兒子孝敬')
  return (
    <>
      <div>Parent</div>
      <Child1 sendData={sendData} cToP={cToP} />
      <Child2 setCtop={setCtop} />
      <div>{cToP}</div>
    </>
  )
}

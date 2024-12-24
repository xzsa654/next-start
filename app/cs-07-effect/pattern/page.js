'use client'
import { useState, useEffect } from 'react'
export default function CounterPage(props) {
  useEffect(() => {
    console.log('無第二個參數，渲染就會重新執行(除錯用)')
  })
  useEffect(() => {
    console.log('第二個參數為空陣列，第一次渲染會執行一次')
  }, [])
  const [total, setTotal] = useState(0)
  //傳入相依變數，props||State
  useEffect(() => {
    console.log('total改變都會執行')
  }, [total])
  return (
    <>
      <h1>計數器</h1>
      <hr />
      <h1>
        <ul>
          {Array(5)
            .fill(0)
            .map((v, i) =>
              i % 2 ? <li key={i}>{total + i}</li> : <li key={i}>{i}</li>
            )}
        </ul>
      </h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
    </>
  )
}

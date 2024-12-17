'use client'
// 客戶端元件
import { useState } from 'react'
// 單獨匯入useState鉤子
export default function CounterPage(props) {
  /* total=常數or狀態變數 
     setTotal=改變狀態的方法，只有setTotal可以改變total變數
     useState(0)會變成total變數的預設值
  */
  const [total, setTotal] = useState(0)
  return (
    <>
      <h1>計數器</h1>
      <hr />
      {/* 條件式使用花括號包起來 */}
      <h1>{total}</h1>
      <button
        onClick={() => {
          // onClick 是react在虛擬DOM添加的一個事件，相當於添加了addEventListener
          // 調用setTotal來改變total值
          setTotal(total + 1)
        }}
      >
        +1
      </button>
    </>
  )
}

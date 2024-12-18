'use client'
// 客戶端元件
import { useState } from 'react'
// 單獨匯入useState鉤子
export default function CounterPage(props) {
  /* total=取值的變數 
     setTotal=改變值的方法，只有setTotal可以改變total變數
     useState(0)會變成total變數的預設值
  */
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1>計數器</h1>
      <hr />
      {/* 條件式使用花括號包起來 */}
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
          // onClick 是react在虛擬DOM添加的一個事件，相當於添加了addEventListener
          setTotal(total + 1)
        }}
      >
        +1
      </button>
    </>
  )
}

'use client'
import { useState } from 'react'
export default function JsxCondRenderPage(props) {
  const [total, setTotal] = useState(0)
  return (
    <>
      <h1>JSX條件式渲染</h1>
      <hr />
      <h1>
        <ul>
          {Array(5)
            .fill(0)
            .map((v, i) => {
              return i % 2 ? <li key={i}>{total + i}</li> : <li key={i}>{i}</li>
            })}
        </ul>
      </h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -1
      </button>
      {/* JSX的條件式渲染 */}
      {total ? <p>total值為{total}</p> : ''}
      {!!total && <p>total值為{total}</p>}
      {total > 0 && <p>total值為{total}</p>}
    </>
  )
}

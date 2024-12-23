'use client'

import { useState } from 'react'

// 範例資料
import data from '../../_data/books.json'

import Item from './item'
const initState = data.map((v) => {
  return { ...v, fav: false }
})

export default function List() {
  const [books, setBook] = useState(initState)

  const handlerToogleFav = (isbn) => {
    const nextBook = books.map((r) => {
      return isbn == r.isbn ? { ...r, fav: !r.fav } : r
    })
    setBook(nextBook)
  }

  const bookList = books.map((r) => {
    return <Item key={r.isbn} r={r} handlerToogleFav={handlerToogleFav} />
  })

  return (
    <>
      <h1>書籍清單</h1>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>title</th>
            <th>author</th>
            <th>加入收藏</th>
          </tr>
        </thead>
        <tbody>{bookList}</tbody>
      </table>
    </>
  )
}

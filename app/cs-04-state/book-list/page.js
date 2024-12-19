'use client'

import { useState } from 'react'
import Image from 'next/image'

// 範例資料
import data from './_data/books.json'

// 實心圖
import bookmarkIconFill from './_icons/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from './_icons/bookmark.svg'
const initState = data.map((v) => {
  return { ...v, fav: false }
})

export default function BookListPage() {
  const [books, setBook] = useState(initState)
  const bookList = books.map((r) => {
    return (
      <tr key={r.isbn}>
        <td>{r.isbn}</td>
        <td>{r.title}</td>
        <td>{r.author}</td>
        <td
          onClick={() => {
            handlerToogleFav(r.isbn)
          }}
        >
          <Image src={r.fav ? bookmarkIconFill : bookmarkIcon} alt="" />
        </td>
      </tr>
    )
  })
  const handlerToogleFav = (isbn) => {
    const nextBook = books.map((r) => {
      return isbn == r.isbn ? { ...r, fav: !r.fav } : r
    })
    setBook(nextBook)
  }

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

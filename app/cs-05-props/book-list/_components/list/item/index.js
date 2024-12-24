'use client'

import NavStar from './nav-star'

export default function Item({ r = {}, handlerToogleFav = (isbn) => {} }) {
  return (
    <>
      <tr>
        <td>{r.isbn}</td>
        <td>{r.title}</td>
        <td>{r.author}</td>
        <NavStar
          handlerToogleFav={handlerToogleFav}
          isbn={r.isbn}
          fav={r.fav}
        />
      </tr>
    </>
  )
}

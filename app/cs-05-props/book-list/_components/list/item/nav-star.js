'use client'

// 實心圖
import bookmarkIconFill from './_icons/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from './_icons/bookmark.svg'

import Image from 'next/image'

export default function NavStar({
  fav = false,
  isbn = '',
  handlerToogleFav = () => {},
}) {
  return (
    <>
      <td
        onClick={() => {
          handlerToogleFav(isbn)
        }}
      >
        <Image src={fav ? bookmarkIconFill : bookmarkIcon} alt="" />
      </td>
    </>
  )
}

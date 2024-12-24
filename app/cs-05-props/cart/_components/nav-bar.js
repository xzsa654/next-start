'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
export default function ComponentsNavBar(props) {
  return (
    <>
      <ul>
        <li>
          <Link href="./shopping-cart">購物車</Link>
        </li>
        <li>
          <Link href="./product">商品</Link>
        </li>
      </ul>
    </>
  )
}

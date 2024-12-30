'use client'

import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Menubar() {
  // 取得目前路徑
  const pathname = usePathname()
  console.log('pathname', pathname)

  const menuItems = [
    {
      id: 1,
      title: '首頁',
      href: '/',
    },
    {
      id: 2,
      title: '商品',
      href: '/cs-05-props/cart/product',
    },
    {
      id: 3,
      title: '購物車',
      href: '/cs-05-props/cart/shopping-cart',
    },
    { id: 4, title: '會員', href: 'cs-05-props/user/login' },
    { id: 5, title: '會員', href: 'cs-05-props/user/profile' },
  ]

  return (
    <>
      <div className={styles.menu}>
        <ul>
          {/* 判斷是否要加上點亮active樣式 */}
          {menuItems.map((v) => {
            return (
              <li
                key={v.id}
                className={pathname === v.href ? styles.active : ''}
              >
                <Link href={v.href}>{`會員區-${v.title}`}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

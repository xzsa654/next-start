'use client'

import React, { useState, useEffect } from 'react'
import style from './style.module.css'
import Logs from '../logs/page.js'
import next from 'next'
export default function NavbarPage(props) {
  const [add, setAdd] = useState(0)
  const handlerAddPlan = () => {
    setAdd((prev) => prev + 1)
  }

  return (
    <>
      <ul className={style['nav-bar']}>
        <li>
          <a
            href="#"
            onClick={() => {
              handlerAddPlan()
            }}
          >
            添加資料
          </a>
        </li>
        <li>
          <a href="#">修改資料</a>
        </li>
        <li>
          <a href="#">刪除資料</a>
        </li>
      </ul>
      <Logs add={add} />
    </>
  )
}

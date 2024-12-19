'use client'

import React, { useState, useEffect } from 'react'
import style from './style.module.css'
import Logs from '../logs/page.js'
import next from 'next'
export default function NavbarPage(props) {
  const logData = [{ add: 0 }]
  const [logs, setLog] = useState(logData)
  const handlerAddPlan = () => {
    const nextData = logs.map((r) => {
      return { ...r, add: r.add + 1 }
    })
    setLog(nextData)
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
      <Logs {...logs} />
    </>
  )
}

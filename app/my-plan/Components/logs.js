'use client'
import './logs.css'
import React, { useState, useEffect } from 'react'
import LogItem from './logitem.js'
export default function ComponentsLogs(props) {
  const mySend = [
    {
      date: new Date('2024-12-17'),
      desc: '學習Node.js',
      time: 60,
    },
    {
      date: new Date('2024-12-18'),
      desc: '學習Javascript',
      time: 50,
    },
    {
      date: new Date('2024-12-19'),
      desc: '學習React',
      time: 40,
    },
    { date: new Date('2023-1-5'), desc: '學習降龍十八掌', time: 60 },
    { date: new Date('2023-1-8'), desc: '學習九陰白骨爪', time: 20 },
  ]
  const myItem =mySend.map((i, v) => (
    <LogItem key={v} {...i} />
  ))
  return (
    <>
      <div className={'container'}>
        {myItem}
      </div>
    </>
  )
}

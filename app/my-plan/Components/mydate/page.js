'use client'

import React, { useState, useEffect } from 'react'
import './mydate.css'
export default function ComponentsMydata(props) {
  const month = props.date.toLocaleString('zh-TW', { month: '2-digit' })
  const day = props.date.getDate()
  return (
    <>
      <div className="date">
        <div className="month">{month}</div>
        <div className="day">{day}</div>
      </div>
    </>
  )
}

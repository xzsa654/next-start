'use client'

import React, { useState, useEffect } from 'react'
import MyData from '../mydate/page.js'
import './logitem.css'
export default function ComponentsLogitem(props) {
  return (
    <>
      <div className="item">
        <MyData date={props.date} />
        <div className="content">
          <h2 className="desc">{props.desc}</h2>
          <div className="time">{props.time}分鐘</div>
        </div>
      </div>
    </>
  )
}

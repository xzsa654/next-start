'use client'

import React, { useState, useEffect } from 'react'
import Mydata from './mydate.js'
import './logitem.css'
export default function ComponentsLogitem(props) {
  return (
    <>
      <div className="item">
        <Mydata date={props.date} />
        <div className="content">
          <h2 className="desc">{props.desc}</h2>
          <div className="time">{props.time}分鐘</div>
        </div>
      </div>
    </>
  )
}

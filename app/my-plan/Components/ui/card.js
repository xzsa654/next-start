'use client'

import React, { useState, useEffect } from 'react'
import style from './card.module.css'
export default function Card(props) {
  return (
    <>
      <div className={`${style.card} ${props.className}`}>{props.children}</div>
    </>
  )
}

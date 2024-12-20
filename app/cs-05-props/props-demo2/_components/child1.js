'use client'
import React, { useState, useEffect } from 'react'

export default function Child1({ sendData = '傳送給子女的資料',cToP ="" }) {
  return (
    <>
      <div>Child1</div>
      <div>{sendData}</div>
      <div>{cToP}</div>
    </>
  )
}

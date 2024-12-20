'use client'

import React, { useState, useEffect } from 'react'
import Child from './child'
export default function Parent(props) {
  return (
    <>
      <h2>Parent</h2>
      <Child title="哈哈" num={123} />
    </>
  )
}

'use client'

import React, { useState, useEffect } from 'react'
import Parent from './_components/parent'
import Child from './_components/child'
export default function Page(props) {
  return (
    <>
      <div>Page</div>
      <Parent>
        <Child />
      </Parent>
    </>
  )
}

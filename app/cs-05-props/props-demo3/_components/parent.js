'use client'

import React, { useState, useEffect } from 'react'

export default function Parent({ children }) {
  return (
    <>
      <div>Parent</div>
      <div style={{ color: 'red' }}>{children}</div>
    </>
  )
}

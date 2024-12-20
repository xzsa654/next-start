'use client'

import React, { useState, useEffect } from 'react'

export default function Child({ title = '', num = 1 }) {
  return (
    <>
      <h3>Child</h3>
      <h3>
        {title} {num}
      </h3>
    </>
  )
}

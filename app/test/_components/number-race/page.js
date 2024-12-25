'use client'

import React, { useState, useEffect } from 'react'
import { motion, animate, useMotionValue, useTransform } from 'framer-motion'
export default function TestTest1({
  color = 'text-white',
  startCount = 10,
  endCount = 20,
  time = 1,
  isFloat = false,
}) {
  startCount = useMotionValue(startCount)

  const roundedCount = useTransform(startCount, (value) => Math.round(value))

  useEffect(() => {
    const control = animate(startCount, endCount, { duration: time })
    return () => control.stop()
  }, [])
  return (
    <>
      <motion.span className={`text-lg ${color}`}>
        {isFloat ? startCount : roundedCount}
      </motion.span>
    </>
  )
}

'use client'

import React, { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
export default function ScrollPage(props) {
  const { scrollYProgress } = useScroll()

  return (
    <div className="h-[2000px]">
      {' '}
      {/* 製造滾動空間 */}
      <motion.div
        style={{
          scale: scrollYProgress, // 隨著滾動縮放
          opacity: scrollYProgress, // 隨著滾動改變透明度
        }}
        className="fixed top-20 left-20 w-40 h-40 bg-blue-500"
      />
    </div>
  )
}

'use client'
import '../globals.css'
import React from 'react'
import { motion } from 'framer-motion'
const TextAnimation = () => {
  const text = 'EventureArts'

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, color: 'transparent' },
    show: {
      opacity: 1,
      color: 'white',
      transition: { duration: 0.8 },
    },
    hover: {
      scale: 0.8,
    },
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <motion.div
          style={{ backgroundColor: 'black' }}
          variants={container}
          initial="hidden"
          animate="show"
          className="flex"
          whileHover="hover"
        >
          {text.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={item}
              className="text-4xl font-bold"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default TextAnimation

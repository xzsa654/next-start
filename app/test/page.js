'use client'
import { React, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import TestTest1 from './_components/number-race/page'
import DragConstraints from './_components/drag-item/page'
import GooglePage from './_components/google/page'
import FacebookPage from './_components/facebook/page'
const TextAnimation = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return null // 或返回一個加載狀態
  }

  const text = 'abcdefghijklmnopqrstuvwxyz'.split('')

  const item = {
    hidden: { opacity: 0, color: 'rgba(255, 255, 255, 0)' },
    show: {
      opacity: 1,
      color: 'rgba(255, 255, 255, 1)',
      transition: { duration: 0.8 },
    },
    hover: {
      scale: 0.8,
    },
  }

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

  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen bg-gray-900">
        刮刮樂:
        <motion.div
          style={{ backgroundColor: 'black' }}
          variants={container}
          initial="hidden"
          animate="show"
          className="flex"
          whileHover="hover"
        >
          {text.map((r, i) => {
            const random = Math.ceil(Math.random() * text.length - 1)
            if (i < 10) {
              return (
                <motion.span
                  key={i}
                  variants={item}
                  className="mr-2 text-4xl font-bold"
                  whileHover="hover"
                >
                  {text[random]}
                </motion.span>
              )
            }
          })}
        </motion.div>
        <div className="text-white m-8">
          數字競賽:
          <TestTest1
            color="text-white" //改變顏色(tailwind)
            startCount={0} //開始數字
            endCount={50} //結束數字
            time={2} //持續時間
            isFloat={false} //是否需要小數
          />
        </div>
        <div>
          <DragConstraints />
        </div>
        <div>
          <GooglePage />
          <FacebookPage />
        </div>
      </div>
    </>
  )
}

export default TextAnimation

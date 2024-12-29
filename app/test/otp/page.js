'use client'

import React, { useState, useEffect } from 'react'

export default function OtpPage() {
  const [otp, setOtp] = useState('')
  const [second, setSecond] = useState(30)

  const submitHandler = (e) => {
    //預設值設定
    setSecond(30)
    let timer = setInterval(() => {
      setSecond((prev) => {
        // 秒數跑動
        if (prev > 0) {
          return prev - 1
        }
        //秒數跑完停止計時函式
        if (prev == 0) {
          clearInterval(timer)
          return 0
        }
      })
    }, 100)
  }

  return (
    <>
      <div className="">
        <input
          className="w-52 mt-5 me-1 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   hover:border-gray-400 transition duration-150 ease-in-out
                   placeholder:text-gray-400"
          type="text"
          value={otp}
          placeholder="請輸入驗證碼"
          onChange={(e) => {
            setOtp(e.target.value)
          }}
        />
        <button
          className={
            second == 0 || second == 30
              ? 'underline decoration-red-400 text-red-400'
              : 'text-gray-300'
          }
          disabled={second !== 0 && second !== 30 ? 'disabled' : ''}
          onClick={submitHandler}
        >
          發送驗證碼
        </button>

        <div className="w-72 flex justify-end">
          <p>持續時間:</p>
          <span className="font-bold me-3">
            {second < 10 ? '0' + second : second}
          </span>
        </div>
      </div>
    </>
  )
}

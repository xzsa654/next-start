'use client'

import React, { useState, useEffect } from 'react'

export default function OtpPage() {
  const [otp, setOtp] = useState('')
  const [minute, setMinute] = useState(2)
  const [second, setSecond] = useState(0)

  const submitHandler = (e) => {
    setMinute(1)
    setSecond(30)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setSecond((prev) => prev - 1)
      if (second == 0) {
        setMinute((prev) => prev - 1)
        setSecond(59)
        if (minute == 0) {
          setMinute(0)
          setSecond(0)
          clearTimeout(timer)
        }
      }
    }, 10)
  }, [second])
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
          className="border"
          disabled={second == 0 && minute == 0 ? '' : 'disabled'}
          onClick={submitHandler}
        >
          重新寄送
        </button>

        <div className="w-72 flex justify-end">
          <p>持續時間:</p>
          <span className="font-bold me-3">
            {minute < 10 ? '0' + minute : minute}:
            {second < 10 ? '0' + second : second}
          </span>
        </div>
      </div>
    </>
  )
}

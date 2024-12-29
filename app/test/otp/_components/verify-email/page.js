'use client'

import React, { useState, useEffect } from 'react'
import PasswordUpdatePage from '../password-update/page'
export default function VerifyEmailPage() {
  const [otp, setOtp] = useState('')
  const [second, setSecond] = useState(30)
  const [verify, setVerify] = useState(true)
  const [wrong, setWrong] = useState('')
  const [email, setEmail] = useState('')
  //驗證email格式
  const isEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    //設定預設值
    setVerify(true)
    const fd = new FormData(e.target)
    const email = e.target.email
    if (!isEmail(email.value)) {
      setWrong('email格式錯誤')
      return setVerify(false)
    }
    //創建Otp隨機數
    const nextOtp = Math.ceil(Math.random() * 100000)
    setOtp(nextOtp)
    //fetch Otp和email到後端處理
    const res = await fetch('http://localhost:3001/verify-email', {
      method: 'POST',
      body: JSON.stringify({ email: email.value, otp }),
      headers: {
        'Content-Type': 'application/JSON',
      },
    })
    const result = await res.json()
    // 後端驗證查無email
    if (!result.success) {
      setWrong('查無email')
      return setVerify(false)
    }
    //email正確時啟動OTP重新寄送的計時器
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
      <div>
        <form
          name="otp"
          onSubmit={submitHandler}
          className="flex transform transition-transform duration-200 ease-in-out"
        >
          <input
            className={`w-52 mt-5 me-1 px-4 py-2 text-gray-700 bg-white border ${
              verify ? 'border-gray-300' : 'border-red-400'
            }  rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   hover:border-gray-400 transition duration-150 ease-in-out
                   placeholder:text-gray-400 `}
            type="text"
            name="email"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="請輸入Email"
          />

          <button
            className={
              second == 0 || second == 30
                ? 'underline decoration-red-400 text-red-400 pt-5'
                : 'text-gray-300'
            }
            disabled={second !== 0 && second !== 30 ? 'disabled' : ''}
          >
            發送驗證碼
          </button>
        </form>
        <p
          className={`h-6 transition-opacity duration-500 ${
            verify ? '' : 'text-red-500'
          } `}
        >
          {verify ? '' : wrong}
        </p>
        <PasswordUpdatePage second={second} email={email} otp={otp} />
      </div>
    </>
  )
}

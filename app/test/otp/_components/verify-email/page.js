'use client'

import React, { useState, useEffect } from 'react'
import PasswordUpdatePage from '../password-update/page'
export default function VerifyEmailPage() {
  const [second, setSecond] = useState(30)
  const [message, setMessage] = useState('')
  const [otpMessage, setOtpMessage] = useState('發送驗證碼')
  //驗證email格式
  const isEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const submitHandler = async (e) => {
    setMessage('')
    e.preventDefault()

    //設定預設值
    const fd = new FormData(e.target)
    const email = fd.get('email')
    if (!email) {
      return setMessage('請輸入email')
    }
    if (!isEmail(email)) {
      return setMessage('email格式錯誤')
    }
    //fetch Otp和email到後端處理
    const res = await fetch('http://localhost:3001/verify-email', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/JSON',
      },
    })
    const result = await res.json()
    // 後端驗證查無email
    if (!result.success) {
      return setMessage('查無email')
    }
    //email正確時啟動OTP重新寄送的計時器
    //預設值設定
    setSecond(30)

    let timer = setInterval(() => {
      setSecond((prev) => {
        // 秒數跑動
        if (prev > 0) {
          setOtpMessage('驗證碼已送出')
          if (prev == 1) {
            setOtpMessage('重新寄送')
          }
          return prev - 1
        }
        //秒數跑完停止計時函式

        if (prev == 0) {
          clearInterval(timer)
          return 0
        }
      })
    }, 1000)
  }

  return (
    <>
      <div>
        <form
          name="otp"
          onSubmit={submitHandler}
          className="w-96 py-2 px-3 bg-white  rounded-lg dark:bg-neutral-900 dark:border-neutral-700"
        >
          <div className="relative flex">
            <input
              type="email"
              id="hs-floating-underline-input-email"
              className="peer py-4 px-0 block w-56 bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600
              focus:pt-6
              focus:outline-none
              focus:pb-2
              [&:not(:placeholder-shown)]:pt-6
              [&:not(:placeholder-shown)]:pb-2
              autofill:pt-6
              autofill:pb-2"
              placeholder="********"
              name="email"
            />
            <label
              htmlFor="hs-floating-underline-input-email"
              className="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
              peer-focus:scale-90
              peer-focus:translate-x-0.5
              peer-focus:-translate-y-1.5
              peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
              peer-[:not(:placeholder-shown)]:scale-90
              peer-[:not(:placeholder-shown)]:translate-x-0.5
              peer-[:not(:placeholder-shown)]:-translate-y-1.5
              peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
            >
              email
            </label>
            <button
              className={
                second == 0 || second == 30
                  ? 'underline decoration-red-400 text-red-400 pt-5'
                  : 'text-gray-300 '
              }
              disabled={second !== 0 && second !== 30 ? 'disabled' : ''}
            >
              {otpMessage}
            </button>
          </div>
          <p className="text-red-500 h-6 transition-opacity duration-500">
            {message}
          </p>
        </form>

        <PasswordUpdatePage second={second} />
      </div>
    </>
  )
}

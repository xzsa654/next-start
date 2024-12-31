'use client'

import { logging } from '@/next.config'
import React, { useState, useEffect } from 'react'
import HSPinInput from '@preline/pin-input'
export default function PasswordUpdatePage({
  second = 0,
  email = '',
  otp = '',
}) {
  const [flag, setFlag] = useState(false)
  //儲存用戶所輸入的otp
  const [userOtp, setUserOtp] = useState('')
  const [message, setMessage] = useState('')
  //取得填寫的otp到狀態內
  useEffect(() => {
    const el = HSPinInput.getInstance('#pin-input')
    el.on('completed', ({ currentValue }) => {
      setUserOtp(currentValue.join(''))
    })
  }, [])
  const updateHandler = (e) => {
    e.preventDefault()
    setMessage('')
    //驗證otp是否與送出一致
    if (otp !== userOtp) {
      return setMessage('otp不相符')
    }
    //驗證密碼和再次輸入是否相同
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          updateHandler(e)
        }}
        className="w-96 py-2 px-3 bg-white  rounded-lg dark:bg-neutral-900 dark:border-neutral-700"
      >
        <div className="flex items-center gap-x-4">
          <div
            className="flex gap-x-5"
            data-hs-pin-input='{ "availableCharsRE": "^[0-9]+$"}'
            id="pin-input"
          >
            {Array(4)
              .fill(0)
              .map((_, i) => {
                return (
                  <input
                    key={i}
                    className="block size-[38px] text-center border border-gray-200 rounded-md text-sm placeholder:text-gray-300 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    type="text"
                    data-hs-pin-input-item
                  />
                )
              })}
          </div>
          <div className="flex items-center">
            <p className="">重新寄送:</p>
            <span className="font-bold me-3 ">
              {second < 10 ? '0' + second : second}
            </span>
          </div>
        </div>
        <p className="text-red-500 h-6 transition-opacity duration-500">
          {message}
        </p>
        <div>
          <div className="relative my-2">
            <input
              type="password"
              id="hs-floating-underline-input-password"
              className="peer py-4 px-0 block w-56 bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600
              focus:pt-6
              focus:pb-2
              [&:not(:placeholder-shown)]:pt-6
              [&:not(:placeholder-shown)]:pb-2
              autofill:pt-6
              autofill:pb-2"
              placeholder="you@password.com"
            />
            <label
              htmlFor="hs-floating-underline-input-password"
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
              password
            </label>
          </div>

          <div className="relative">
            <input
              type="password-again"
              id="hs-floating-underline-input-passowrd"
              className="peer py-4 px-0 block w-56 bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600
              focus:pt-6
              focus:pb-2
              [&:not(:placeholder-shown)]:pt-6
              [&:not(:placeholder-shown)]:pb-2
              autofill:pt-6
              autofill:pb-2"
              placeholder="********"
            />
            <label
              htmlFor="hs-floating-underline-input-passowrd"
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
              password_again
            </label>
          </div>
        </div>
        <button className="btn border border-gray-200 my-5">送出</button>
      </form>
    </>
  )
}

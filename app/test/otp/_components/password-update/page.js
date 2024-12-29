'use client'

import React, { useState, useEffect } from 'react'

export default function PasswordUpdatePage({
  second = 0,
  email = '',
  otp = '',
}) {
  return (
    <>
      <div>
        <input
          className="w-52 mt-5 me-1 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   hover:border-gray-400 transition duration-150 ease-in-out
                   placeholder:text-gray-400"
          type="text"
          placeholder="請輸入驗證碼"
        />
      </div>
      <div className="w-72 flex justify-end">
        <p>重新寄送:</p>
        <span className="font-bold me-3">
          {second < 10 ? '0' + second : second}
        </span>
      </div>
    </>
  )
}

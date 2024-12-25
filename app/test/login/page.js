'use client'

import React, { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/use-auth'
export default function LoginPage(props) {
  const { logOut, auth } = useAuth()
  return (
    <>
      <div>歡迎登入</div>
      <p>id：{auth.id}</p>
      <p>name：{auth.name}</p>
      <p>email：{auth.email}</p>
      <button className="border" onClick={logOut}>
        登出
      </button>
    </>
  )
}

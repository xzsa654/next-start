'use client'

import React, { useState, useEffect, useContext } from 'react'
import { useAuth } from '@/hooks/use-auth'

export default function LoginPage(props) {
  const { login, isAuth, auth, logOut } = useAuth()
  return (
    <>
      <h1>登入頁</h1>
      <h2>{isAuth ? '以登入' : '未登入'}</h2>
      <button onClick={isAuth ? logOut : login}>
        {isAuth ? '登出' : '登入'}
      </button>
    </>
  )
}

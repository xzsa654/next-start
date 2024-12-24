'use client'

import React, { useState, useEffect, useContext } from 'react'
import { useAuth } from '@/hooks/use-auth'

export default function LoginPage(props) {
  const { login, isAuth, auth, logOut } = useAuth()
  return (
    <>
      <h1>個人頁面</h1>
      <p>{auth.id}</p>
      <p>{auth.name}</p>
      <p>{auth.email}</p>
      <button onClick={isAuth ? logOut : login}>
        {isAuth ? '登出' : '登入'}
      </button>
    </>
  )
}

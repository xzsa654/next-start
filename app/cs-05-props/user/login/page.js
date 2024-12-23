'use client'

import React, { useState, useEffect, useContext } from 'react'
import { useAuth } from '@/hooks/use-auth'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
export default function LoginPage(props) {
  const { login, isAuth, auth, logOut } = useAuth()
  const router = useRouter()
  const MySwal = withReactContent(Swal)
  return (
    <>
      <h1>登入頁</h1>
      <h2>{isAuth ? '以登入' : '未登入'}</h2>
      <h2>
        <Link href="./profile">連結到個人頁</Link>
      </h2>
      {isAuth ? (
        <button onClick={logOut}>登出</button>
      ) : (
        <button
          onClick={() => {
            login()

            Swal.fire({
              title: '是否要執行跳轉',
              text: 'Yes, do it!',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, do it!',
            }).then((result) => {
              if (result.isConfirmed) {
                router.push('./profile')
                Swal.fire({
                  title: '成功跳轉!',
                  text: '你已經跳轉到個人頁面',
                  icon: 'success',
                })
              }
            })
          }}
        >
          登入
        </button>
      )}
    </>
  )
}

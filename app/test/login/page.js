'use client'

import React, { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/use-auth'
import useSWR from 'swr'
export default function LoginPage({ token = '' }) {
  const { auth } = useAuth()
  const fetcher = (url) => {
    return fetch(url, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }).then((res) => res.json())
  }

  const { data, error, isLoading } = useSWR(
    'http://localhost:3001/todo-list',
    fetcher
  )

  return (
    <>
      <div className="text-left mb-2">
        歡迎登入
        <p>id：{auth.id}</p>
        <p>name：{auth.name}</p>
        <p>email：{auth.email}</p>
      </div>
    </>
  )
}

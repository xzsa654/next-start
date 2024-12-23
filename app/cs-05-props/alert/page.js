'use client'

import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function AlertPage(props) {
  const MySwal = withReactContent(Swal)

  return (
    <>
      <h1>Toast</h1>
      <ToastContainer />
      <button
        onClick={() => {
          toast.success('你好棒')
        }}
      >
        吐司成功
      </button>
      <button
        onClick={() => {
          toast.error('你好爛')
        }}
      >
        吐司錯誤
      </button>
      <hr />
      <h1>Swat</h1>
      <button
        onClick={() => {
          MySwal.fire({
            title: '確認刪除?',
            text: '刪除後無法復原!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '刪除',
          }).then((result) => {
            if (result.isConfirmed) {
              toast.success('刪除成功')
            }
          })
        }}
      >
        刪除
      </button>
    </>
  )
}

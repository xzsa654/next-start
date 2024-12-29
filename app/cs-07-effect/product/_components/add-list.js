'use client'

import React, { useState, useEffect } from 'react'
export default function ComponentsAddList(props) {
  const submitHandler = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const title = formData.get('title')
    const content = formData.get('content')
    const send = { title, content }
    const res = await fetch('http://localhost:3005/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(send),
    })
    const result = await res.json()
    console.log(result)
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="">
          title
          <input type="text" name="title" />
        </label>
        <label htmlFor="">
          content
          <input type="text" name="content" />
        </label>
        <button>送出</button>
      </form>
    </>
  )
}

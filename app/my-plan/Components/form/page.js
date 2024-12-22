'use client'

import React, { useState, useEffect, useRef } from 'react'
import './form.css'
export default function FormPage({ setPlan = () => {}, plan = [] }) {
  const [formValue, setFormValue] = useState({ date: '', desc: '', time: '' })
  const addItemHandle = (e) => {
    let nextData = {}
    if (e.target.id == 'date') {
      nextData = { ...formValue, date: new Date(e.target.value) }
    } else if (e.target.id == 'desc') {
      nextData = { ...formValue, desc: e.target.value }
    } else if (e.target.id == 'time') {
      nextData = { ...formValue, time: e.target.value }
    }
    setFormValue(nextData)
  }
  const addPlanHandle = (e) => {
    e.preventDefault()
    const nextPlan = [...plan, formValue]
    setPlan(nextPlan)
  }
  return (
    <>
      <form onSubmit={addPlanHandle}>
        <div className="form-item">
          <label htmlFor="date">日期</label>
          <input onChange={addItemHandle} type="date" id="date" />

          <label htmlFor="desc">內容</label>
          <input onChange={addItemHandle} type="text" id="desc" />

          <label htmlFor="time">時間</label>
          <input onChange={addItemHandle} type="text" id="time" />
        </div>
        <div className="btn-form">
          <button>送出</button>
        </div>
      </form>
    </>
  )
}

'use client'

import React, { useState, useEffect } from 'react'

export default function RadioButtons({
  initValue = '', // 初始值
  value = [], // 一個陣列，要選擇的項目陣列
  onChange = () => {}, // 當選取時的事件處理函式
}) {
  // 選項按鈕的狀態，選項按鈕的值只能選一個
  const [selectedValue, setSelectedValue] = useState(initValue)

  return (
    <>
      {value.map((v, i) => {
        return (
          <label key={i}>
            <input
              type="radio"
              // 還是會設定值，因為狀態中是記錄值
              value={v}
              // 判斷是否被選取，用每個選項中的值和狀態中的值比對
              checked={selectedValue === v}
              // 當選取時，設定狀態中的值
              onChange={(e) => {
                setSelectedValue(e.target.value)
                // 回傳父母元件
                onChange(e.target.value)
              }}
            />
            {v}
          </label>
        )
      })}
    </>
  )
}

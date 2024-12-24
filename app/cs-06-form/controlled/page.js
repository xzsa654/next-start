'use client'
import RadioButtons from '../components/radio-button/page'
import React, { useState, useEffect } from 'react'
const pets = ['狗', '貓', '豬']
export default function ControlledPage(props) {
  const [text, setText] = useState('')
  const [pet, setPet] = useState('')
  const brands = ['apple', 'sony', 'xiaomi']
  const initBrands = brands.map((r, i) => {
    return { name: r, id: i + 1, checked: false }
  })
  const [brand, setBrand] = useState(initBrands)
  const toggleChange = (id) => {
    const nextBrand = brand.map((r) =>
      r.id == id ? { ...r, checked: !r.checked } : r
    )
    setBrand(nextBrand)
  }
  const handleCheckboxGroupAll = (e) => {
    // 強制讓所有的選項的checked屬性，和e.target.checked一致
    const nextBrands = brand.map((v) => {
      return { ...v, checked: e.target.checked }
    })

    setBrand(nextBrands)
  }
  const lotsMap = brand.map((r) => {
    return (
      <label key={r.id}>
        <input
          type="checkbox"
          value={r}
          checked={r.checked}
          onChange={(e) => {
            toggleChange(r.id)
          }}
        />
        {r.name}
      </label>
    )
  })

  return (
    <>
      <h1>Controlled 元件</h1>
      <hr />
      <h2>type:text</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <hr />
      <h2>單選圈群組</h2>
      <RadioButtons value={pets} onChange={setPet} />
      <hr />
      <h2>SelectBox</h2>
      <select>
        {pets.map((v, i) => {
          return (
            <option
              key={i}
              value={v}
              selected={v == pet}
              onChange={(e) => {
                setPet(e.target.value)
              }}
            >
              {v}
            </option>
          )
        })}
      </select>
      <hr />
      <h2>核取方塊群組</h2>
      <input
        type="checkbox"
        checked={brand.every((r) => r.checked)}
        onChange={handleCheckboxGroupAll}
      />
      全選
      {lotsMap}
    </>
  )
}

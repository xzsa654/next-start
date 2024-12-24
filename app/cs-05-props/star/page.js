'use client'

import React, { useState, useEffect } from 'react'
import Star from './_components/star'
import { FaWolfPackBattalion } from 'react-icons/fa'
import { GiTigerHead } from 'react-icons/gi'
export default function Page(props) {
  const [r1, setR1] = useState(2)
  const [r2, setR2] = useState(3)
  return (
    <>
      <h1>對照組</h1>
      <Star />
      <hr />
      <h1>測試組</h1>
      <Star
        initRating={r1}
        onChangeHandler={setR1}
        maxCount={5}
        fillColor="skyblue"
        icon={<FaWolfPackBattalion />}
      />
      <Star
        initRating={r2}
        onChangeHandler={setR2}
        maxCount={8}
        fillColor="#bfa"
        icon={<GiTigerHead />}
      />
    </>
  )
}

'use client'
import { useState } from 'react'
// 導入.module.css檔案
import styles from './_styles/star.module.css'

export default function StarPage() {
  const [rating, setRating] = useState(0)
  const [HoverRating, setHoverRating] = useState(0)
  const starWar = Array(5)
    .fill(1)
    .map((_, i) => {
      const score = i + 1
      return (
        <button
          key={score}
          className={styles.starBtn}
          onClick={() => {
            setRating(score)
          }}
          onMouseEnter={() => {
            setHoverRating(score)
          }}
          onMouseLeave={() => {
            setHoverRating(0)
          }}
        >
          <span
            className={
              score <= rating || score <= HoverRating ? styles.on : styles.off
            }
          >
            &#9733;
          </span>
        </button>
      )
    })
  return (
    <>
      <h1>星星評分範例</h1>
      <div>{starWar}</div>
    </>
  )
}

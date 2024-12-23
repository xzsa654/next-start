'use client'
import { useState } from 'react'
// 導入.module.css檔案
import styles from './star.module.css'

export default function Star({
  initRating = 0,
  maxCount = 5,
  onChangeHandler = () => {},
  fillColor = 'gold',
  emptyColor = 'gray',
  icon = <>&#9733;</>,
}) {
  const [rating, setRating] = useState(initRating)
  const [HoverRating, setHoverRating] = useState(0)
  const starWar = Array(maxCount)
    .fill(1)
    .map((_, i) => {
      const score = i + 1
      return (
        <button
          key={score}
          className={styles.starBtn}
          onClick={() => {
            setRating(score)
            onChangeHandler(score)
          }}
          onMouseEnter={() => {
            setHoverRating(score)
          }}
          onMouseLeave={() => {
            setHoverRating(0)
          }}
        >
          <span
            style={{
              '--fill-color':fillColor,
              '--empty-color':emptyColor,
            }}
            className={
              score <= rating || score <= HoverRating ? styles.on : styles.off
            }
          >
            {icon}
          </span>
        </button>
      )
    })
  return (
    <>
      <div>{starWar}</div>
    </>
  )
}

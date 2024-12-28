import { useState, useEffect } from 'react'

export function useFetch(url, options = {}) {
  // 得到伺服器回應的資料
  const [data, setData] = useState(null)
  // 載入指示用的信號狀態
  const [loading, setLoading] = useState(true)
  // 記錄錯誤訊息
  const [error, setError] = useState(null)

  useEffect(() => {
    // fetch 資料用的函式
    async function fetchData() {
      try {
        const res = await fetch(url, options)
        const json = await res.json()
        // 設定從伺服器得到的資料
        setData(json)
        // 讓載入動畫有時間展示，所以延遲1.5秒
        setTimeout(() => {
          setLoading(false)
        }, 1500)
      } catch (err) {
        // 顯示錯誤訊息
        console.log(err)
        setError(err)
        // 讓載入動畫有時間展示，所以延遲1.5秒
        setTimeout(() => {
          setLoading(false)
        }, 1500)
      }
    }
    // 呼叫fetch資料的函式
    fetchData()
  }, [url, options])

  return { data, loading, error }
}

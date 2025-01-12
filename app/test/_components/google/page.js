'use client'
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  signOut,
} from 'firebase/auth'
import { firebaseConfig } from '../../_hooks/use-firebase'
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
auth.languageCode = 'cn'
import React, { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/use-auth'
import LoginPage from '../../login/page'
export default function GooglePage() {
  // 將登入的信息回調給 login 函示
  const { login } = useAuth()
  // 是否登入的狀態
  const [isAuth, setIsAuth] = useState(false)
  // 訪問權的狀態
  const [token, setToken] = useState('')
  useEffect(() => {
    // 監聽登入狀態是否有改變
    auth.onAuthStateChanged(async (user) => {
      //登入狀態
      if (user) {
        setIsAuth(true)
        user.getIdToken().then((token) => {
          setToken(token)
        })
      }
    })
  }, [token])

  // 第三方登入函式
  const thirdPartLoginHandler = (e) => {
    let provider
    // 如果點擊的是 google button 就創建 google 的第三方登入物件 ， 反之
    e.target.innerHTML == 'Google 登入'
      ? (provider = new GoogleAuthProvider())
      : (provider = new FacebookAuthProvider())
    // 彈出視窗
    signInWithPopup(auth, provider)
      .then((result) => {
        //如果有成功創建 ， 則取得訪問權
        if (result) {
          // 登入狀態
          setIsAuth(true)

          const credential = GoogleAuthProvider.credentialFromResult(result)
          const token = credential.accessToken
          //將取得的會員資料回傳給use-auth紀錄
          const { displayName, photoURL, email } = result.user
          login({ displayName, photoURL, email })
        }
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.customData.email
        const credential = GoogleAuthProvider.credentialFromError(error)
      })
  }

  return (
    <>
      {!isAuth ? (
        <>
          <button
            className="text-white border me-5"
            onClick={thirdPartLoginHandler}
          >
            Google 登入
          </button>
          <button
            className="text-white border "
            onClick={thirdPartLoginHandler}
          >
            Facebook 登入
          </button>
        </>
      ) : (
        <>
          <div className="text-center text-white">
            <LoginPage token={token} />
            <button
              className=" border "
              onClick={() => {
                signOut(auth)
                setIsAuth(false)
              }}
            >
              登出
            </button>
          </div>
        </>
      )}
    </>
  )
}

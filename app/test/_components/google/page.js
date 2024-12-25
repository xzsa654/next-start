'use client'
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { firebaseConfig } from '../../_hooks/use-firebase'
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
auth.languageCode = 'cn'
const provider = new GoogleAuthProvider()
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/use-auth'
export default function GooglePage(props) {
  const { login } = useAuth()
  const router = useRouter()
  const [isAuth, setIsAuth] = useState(
    false || localStorage.getItem('auth') == 'true'
  )
  const [token, setToken] = useState('')
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuth(true)
        localStorage.setItem('auth', true)
        user.getIdToken().then((token) => {
          setToken(token)
        })
      }
    })
  }, [token])

  const googleLoginHandler = (e) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        if (result) {
          setIsAuth(true)
          localStorage.setItem('auth', true)
          const credential = GoogleAuthProvider.credentialFromResult(result)
          const token = credential.accessToken
          console.log(result.user)

          const { displayName, photoURL, email } = result.user
          login({ displayName, photoURL, email })
          router.push('/test/login')
        }
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.customData.email
        const credential = GoogleAuthProvider.credentialFromError(error)
      })
  }
  const loginOutHandler = async () => {
    await signOut(auth)
    setIsAuth(false)
  }
  if (!localStorage.getItem('auth')) {
    loginOutHandler()
  }
  return (
    <>
      {!isAuth ? (
        <button className="text-white border " onClick={googleLoginHandler}>
          Google 登入
        </button>
      ) : (
        <>
          <p className="text-white">歡迎登入</p>
        </>
      )}
    </>
  )
}

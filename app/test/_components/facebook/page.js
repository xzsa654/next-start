'use client'
import { initializeApp } from 'firebase/app'

import {
  getAuth,
  FacebookAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { firebaseConfig } from '../../_hooks/use-firebase'
import { useAuth } from '@/hooks/use-auth'
const provider = new FacebookAuthProvider()

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
auth.languageCode = 'cn'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
export default function FacebookPage(props) {
  const [isAuth, setIsAuth] = useState(
    false || localStorage.getItem('auth') == 'true'
  )
  const [token, setToken] = useState('')
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setIsAuth(true)
        localStorage.setItem('auth', true)
        setToken(await user.getIdToken())
      }
    })
  }, [token])
  const { login } = useAuth()
  const router = useRouter()
  const facebookLoginHandler = (e) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        if (result) {
          setIsAuth(true)
          localStorage.setItem('auth', true)
          const user = result.user
          const { displayName, email, photoUrl } = user
          login({ displayName, email, photoUrl })
          const credential = FacebookAuthProvider.credentialFromResult(result)
          const accessToken = credential.accessToken
          router.push(`/test/login`)
        }
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.customData.email
        const credential = FacebookAuthProvider.credentialFromError(error)
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
      {isAuth ? (
        ''
      ) : (
        <button
          className="text-white ms-5 border"
          onClick={facebookLoginHandler}
        >
          Facebook登入
        </button>
      )}
    </>
  )
}

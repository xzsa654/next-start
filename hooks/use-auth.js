'use client'

import { createContext, useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/navigation'

const AuthContext = createContext(null)

AuthContext.displayName = 'AuthContext'

export function AuthProvider({ children }) {
  const router = useRouter()
  const defaultValue = ''
  const [auth, setAuth] = useState(defaultValue)
  const isAuth = !!auth?.id
  const login = (obj) => {
    setAuth({ id: 1, name: obj.displayName, email: obj.email })
  }
  const logOut = async () => {
    await setAuth(defaultValue)
    localStorage.removeItem('auth')
  }
  const send = { isAuth, logOut, login, auth }
  return (
    <AuthContext.Provider value={{ ...send }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

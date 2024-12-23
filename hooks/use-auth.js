'use client'

import { createContext, useState, useEffect, useContext } from 'react'

const AuthContext = createContext(null)

AuthContext.displayName = 'AuthContext'

export function AuthProvider({ children }) {
  const defaultVaule = { id: 0, name: 'Peter', email: '' }
  const [auth, setAuth] = useState(defaultVaule)
  const isAuth = !!auth?.id
  const login = () => {
    setAuth({ id: 1, name: 'John Doe', email: 'john@example.com' })
  }
  const logOut = () => {
    setAuth(defaultVaule)
  }
  const send = { isAuth, logOut, login, auth }
  return (
    <AuthContext.Provider value={{ ...send }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

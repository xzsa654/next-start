'use client'

import { AuthProvider } from '@/hooks/use-auth'
export default function Provider({ children }) {
  return <AuthProvider>{children}</AuthProvider>
}

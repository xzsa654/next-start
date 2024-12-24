'use client'

import { AuthProvider } from '@/hooks/use-auth'
import { CartProvider } from '@/hooks/use-cart'
export default function Provider({ children }) {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  )
}

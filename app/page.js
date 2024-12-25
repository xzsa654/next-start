'use client'
import { useAuth } from '@/hooks/use-auth'
export default function Home(props) {
  const { isAuth, logOut, login, auth } = useAuth()
  return (
    <>
      <h1>首頁</h1>
      <h2>{auth.name}</h2>
      <h2>{props.user?.displayName}</h2>
    </>
  )
}

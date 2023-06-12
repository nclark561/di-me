'use client'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  const handleClick = () => {
    router.push('/login')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to Di-me, an online chatting app!</h1>
      <button onClick={handleClick}>Click Here to start chatting!</button>
    </main>
  )
}

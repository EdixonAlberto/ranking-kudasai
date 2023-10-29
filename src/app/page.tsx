'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Main() {
  const router = useRouter()

  // MOUNT
  useEffect(() => {
    const session = localStorage.getItem('session')

    if (session) {
      const { username } = JSON.parse(session) as { username: string }
      router.push(`/ranking?username=${username}`)
      return
    }

    router.push('/login')
  }, [])
}

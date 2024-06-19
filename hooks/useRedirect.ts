'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getMe } from '@/app/api/auth'

export const useRedirect = (page: string) => {
  const [shouldLoadContent, setShouldLoadContent] = useState(false)
  useEffect(() => {
    checkUser()
  }, [])

  const router = useRouter()
  const checkUser = async () => {
    const user = await getMe()
    if (page === 'user' && user) {
      setShouldLoadContent(true)
      return
    }
    if (page === 'auth' && !user) {
      setShouldLoadContent(true)
      return
    }
    router.push('/')
  }
  return { shouldLoadContent }
}

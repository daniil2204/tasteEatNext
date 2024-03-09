'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getMe } from '@/app/api/auth'

export const useRedirect = (isAuthPage = false) => {
  const [shouldLoadContent, setShouldLoadContent] = useState(false)
  useEffect(() => {
    checkUser()
  }, [])

  const router = useRouter()
  const checkUser = async () => {
    const user = await getMe()
    if (!isAuthPage && !user) {
      setShouldLoadContent(true)
      return
    }
    router.push('/')
  }
  return { shouldLoadContent }
}

'use client'
import React from 'react'
import Register from './elements/Register/Register'

import { useSearchParams } from 'next/navigation'
import Login from './elements/Login/Login'
import { useRedirect } from '@/hooks/useRedirect'

const AuthPage = () => {
  const { shouldLoadContent } = useRedirect(false)
  const searchParams = useSearchParams()
  const search = searchParams.get('component')
  return (
    <>{shouldLoadContent && (search === 'login' ? <Login /> : <Register />)}</>
  )
}

export default AuthPage

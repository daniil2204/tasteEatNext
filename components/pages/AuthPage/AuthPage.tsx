'use client'
import React from 'react'
import Register from './elements/Register/Register'

import { useSearchParams } from 'next/navigation'
import Login from './elements/Login/Login'

const AuthPage = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('component')
  return <>{search === 'login' ? <Login /> : <Register />}</>
}

export default AuthPage

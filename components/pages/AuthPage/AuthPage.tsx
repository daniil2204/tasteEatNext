'use client'
import React from 'react'
import Register from './elements/Register/Register'

import { useSearchParams } from 'next/navigation'
import Login from './elements/Login/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AuthPage = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('component')
  return (
    <>
      {search === 'login' ? <Login /> : <Register />}
      <ToastContainer />
    </>
  )
}

export default AuthPage

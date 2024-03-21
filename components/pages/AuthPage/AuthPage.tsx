'use client'
import React from 'react'
import Register from './elements/Register/Register'
import styles from './AuthPage.module.scss'
import { useSearchParams } from 'next/navigation'
import Login from './elements/Login/Login'
import { useRedirect } from '@/hooks/useRedirect'
import Link from 'next/link'

const AuthPage = () => {
  const { shouldLoadContent } = useRedirect(false)
  const searchParams = useSearchParams()
  const search = searchParams.get('component')
  return (
    <div className={styles.authPage}>
      <div className={styles.linkBar}>
        <Link href={'/auth?component=login'}>Login</Link>
        <Link href={'/auth?component=register'}>Register</Link>
      </div>
      {shouldLoadContent && (search === 'login' ? <Login /> : <Register />)}
    </div>
  )
}

export default AuthPage

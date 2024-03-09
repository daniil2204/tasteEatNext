'use client'
import React, { useEffect } from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import Navigation from './elements/navigation/Navigation'
import Link from 'next/link'
import { useAppContext } from '@/context/user'
import { getMe } from '@/app/api/auth'
import { toast } from 'react-toastify'

const Header = () => {
  const { user, setUser } = useAppContext()
  const getUser = async () => {
    const user = await getMe()
    if (user) {
      setUser(user)
    } else {
      toast.warning('Please login or register', { position: 'bottom-right' })
    }
  }
  useEffect(() => {
    getUser()
  }, [])

  const btnRender = () => {
    if (user) {
      return (
        <Link className={styles.btn__user} href={'/user'}>
          {user.name}
        </Link>
      )
    } else {
      return (
        <>
          <Link className={styles.btn__auth} href={'/auth?component=login'}>
            Login
          </Link>
          <Link className={styles.btn__auth} href={'/auth?component=register'}>
            Register
          </Link>
          <Image
            src={'/assets/img/call.svg'}
            alt="call"
            width={24}
            height={24}
          />
        </>
      )
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.banner}>
        <button className={`${styles.btn} ${styles.btn__reservation}`}>
          <Link href={'/reservation'} className={styles.btn__resevation}>
            Reservation
          </Link>
          <Image
            src={'/assets/img/reservationIcon.svg'}
            alt="reservation"
            width={20}
            height={20}
          />
        </button>
        <Image
          className={styles.logo}
          alt="restaurant logo"
          src="/assets/img/bannerLogo.svg"
          width={378}
          height={188}
        />
        <div className={`${styles.btn} ${styles.btn__call}`}>{btnRender()}</div>
      </div>
      <p className={styles.line} />
      <Navigation />
    </header>
  )
}

export default Header

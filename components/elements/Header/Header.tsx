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
          <Image
            className={styles.btn__userImg}
            src={'/assets/img/user.svg'}
            alt="user"
            width={24}
            height={24}
          />
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
          <Link href={user ? 'user' : '/auth?component=login'}>
            <Image
              className={styles.btn__userImg}
              src={'/assets/img/user.svg'}
              alt="user"
              width={24}
              height={24}
            />
          </Link>
        </>
      )
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.banner}>
        <div className={`${styles.btn} ${styles.btn__userBtn}`}>
          {btnRender()}
        </div>
        <Image
          className={styles.logo}
          alt="restaurant logo"
          src="/assets/img/bannerLogo.svg"
          width={378}
          height={188}
        />
        <button className={`${styles.btn} ${styles.btn__bucket}`}>
          <Link href={'/bucket'} className={styles.btn__bucket}>
            Bucket
          </Link>
          <Image
            src={'/assets/img/cart.svg'}
            alt="shopCart"
            width={24}
            height={24}
          />
        </button>
      </div>
      <Navigation />
    </header>
  )
}

export default Header

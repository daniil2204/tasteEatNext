'use client'
import React, { useEffect } from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import Navigation from './elements/navigation/Navigation'
import Link from 'next/link'

const Header = () => {
  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      console.log('helo')
    }
  }, [])

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
        <div className={`${styles.btn} ${styles.btn__call}`}>
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
        </div>
      </div>
      <p className={styles.line} />
      <Navigation />
    </header>
  )
}

export default Header

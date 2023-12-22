'use client'
import React from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Navigation from './elements/navigation/Navigation'

const Header = () => {
  const pathName = usePathname()
  console.log(pathName)
  return (
    <header className={styles.header}>
      <div className={styles.banner}>
        <button className={`${styles.btn} ${styles.btn__call}`}>
          <p>Call - 123 456 789</p>
          <Image
            src={'/assets/img/call.svg'}
            alt="call"
            width={24}
            height={24}
          />
        </button>
        <Image
          className={styles.logo}
          alt="restaurant logo"
          src="/assets/img/bannerLogo.svg"
          width={378}
          height={188}
        />
        <button className={`${styles.btn} ${styles.btn__reservation}`}>
          <p>Reservation</p>
          <Image
            src={'/assets/img/reservation.svg'}
            alt="reservation"
            width={20}
            height={20}
          />
        </button>
      </div>
      <p className={styles.line} />
      <Navigation />
    </header>
  )
}

export default Header

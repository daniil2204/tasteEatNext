'use client'
import React, { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import { useWindowWidth } from '@/hooks/useMediaQuery'
import { sizeInterface } from '@/types/header'
import Navigation from './elements/navigation/Navigation'

const Header = () => {
  const { windowWidth } = useWindowWidth()
  const [size, setSize] = useState<sizeInterface>({ width: 378, height: 188 })
  useEffect(() => {
    windowWidth.windowWidth > 1200
      ? setSize({ width: 378, height: 188 })
      : windowWidth.windowWidth > 900
        ? setSize({ width: 280, height: 118 })
        : windowWidth.windowWidth > 520
          ? setSize({ width: 240, height: 98 })
          : setSize({ width: 160, height: 68 })
  }, [windowWidth])
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
          alt="restaurant logo"
          src="/assets/img/bannerLogo.svg"
          width={size.width}
          height={size.height}
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
      <p className={styles.line}>{}</p>
      <Navigation />
    </header>
  )
}

export default Header

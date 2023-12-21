'use client'
import React, { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import { useWindowWidth } from '@/hooks/useMediaQuery'
import { sizeInterface } from '@/types/header'
import Navigation from './elements/navigation/Navigation'
import { sizeLogoByWidth } from '@/utils/sizeLogoByWidth'

const Header = () => {
  const { windowWidth } = useWindowWidth()
  const [size, setSize] = useState<sizeInterface>({ width: 378, height: 188 })
  useEffect(() => {
    const logoSize = sizeLogoByWidth(windowWidth.innerWidth - 70)
    setSize(logoSize)
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

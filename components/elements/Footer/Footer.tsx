'use client'
import React from 'react'
import { useWindowWidth } from '@/hooks/useMediaQuery'
import { useState, useEffect } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { sizeInterface } from '@/types/header'
import { sizeLogoByWidth } from '@/utils/sizeLogoByWidth'
import { logos } from '@/utils/additionalLists'
import Image from 'next/image'
import Link from 'next/link'
import headerStyles from '../Header/Header.module.scss'
import styles from './Footer.module.scss'

const Footer = () => {
  const { windowWidth } = useWindowWidth()
  const [size, setSize] = useState<sizeInterface>({ width: 378, height: 188 })
  const is590 = useMediaQuery(590)
  useEffect(() => {
    const logoSize = sizeLogoByWidth(windowWidth.innerWidth)
    setSize(logoSize)
  }, [windowWidth])
  return (
    <footer className={styles.footer}>
      <div className={headerStyles.banner}>
        <div className={styles.widthContainer}>
          <p className={`${styles.text} ${styles.text__hashtag}`}>
            #TheTastEat
          </p>
        </div>
        {!is590 && (
          <div>
            <Image
              alt="restaurant logo"
              src="/assets/img/bannerLogo.svg"
              width={size.width}
              height={size.height}
            />
            <p className={`${styles.text} ${styles.text__logo}`}>
              Join our mailing list for updates,
              <br />
              Get news & offers events.
            </p>
          </div>
        )}
        <div className={`${styles.logos} ${styles.widthContainer}`}>
          {logos.map((logo) => (
            <Link
              key={logo.alt}
              href={'https://www.instagram.com/'}
              target="_blank"
            >
              <Image src={logo.src} alt={logo.alt} width={24} height={24} />
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.addInfo}>
        <div>
          <p
            className={`${styles.addInfo__text} ${styles.addInfo__text__header}`}
          >
            Contact
          </p>
          <p className={`${styles.addInfo__text}`}>5 Rue Dalou, 75015 Paris</p>
          <p className={`${styles.addInfo__text}`} style={{ color: '#E1B168' }}>
            +123 456 789
          </p>
          <p className={`${styles.addInfo__text}`} style={{ color: '#E1B168' }}>
            josefin@mail.com
          </p>
        </div>
        <div>
          <input className={styles.emailInput} placeholder="Email" />
          <button className={styles.emailBtn}>
            <p
              style={{ color: '#000', fontWeight: 'bold' }}
              className={styles.addInfo__text}
            >
              Subscribe
            </p>
          </button>
        </div>
        <div>
          <p
            className={`${styles.addInfo__text} ${styles.addInfo__text__header}`}
          >
            Working Hours
          </p>
          <p className={`${styles.addInfo__text}`}>
            <span style={{ color: '#E1B168' }}>Mon – Fri</span>: 7.00am – 6.00pm
          </p>
          <p className={`${styles.addInfo__text}`}>
            <span style={{ color: '#E1B168' }}>Sat: </span>7.00am – 6.00pm
          </p>
          <p className={`${styles.addInfo__text}`}>
            <span style={{ color: '#E1B168' }}>Sun: </span>8.00am – 6.00pm
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

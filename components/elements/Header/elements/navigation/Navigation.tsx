'use client'
import React, { useState } from 'react'
import SideBar from '@/components/elements/SideBar/SideBar'
import styles from './Navigation.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { logos, navList } from '@/utils/additionalLists'

const Navigation = () => {
  const is600 = useMediaQuery(600)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className={styles.nav}>
      {is600 && <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />}
      <ul className={styles.navList}>
        {navList.map((link) => (
          <li className={styles.navList__text} key={link.title}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <Image
        className={styles.white}
        src={'/assets/img/menu.svg'}
        alt="menu"
        width={24}
        height={24}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className={styles.logos}>
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
    </nav>
  )
}

export default Navigation

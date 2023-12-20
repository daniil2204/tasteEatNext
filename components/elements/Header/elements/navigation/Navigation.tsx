import React, { useState } from 'react'
import SideBar from '@/components/elements/SideBar/SideBar'
import styles from './Navigation.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const Navigation = () => {
  const is565 = useMediaQuery(575)
  const [isOpen, setIsOpen] = useState(false)
  const navList = [
    'Home',
    'About Us',
    'Our Menu',
    'Pages',
    'Blog',
    'Contact Us',
  ]
  const logos = [
    {
      src: '/assets/img/icons/instagram.svg',
      alt: 'instagram logo',
      href: 'https://www.instagram.com/',
    },
    {
      src: '/assets/img/icons/facebook.svg',
      alt: 'facebook logo',
      href: 'https://www.instagram.com/',
    },
    {
      src: '/assets/img/icons/twitter.svg',
      alt: 'twitter logo',
      href: 'https://www.instagram.com/',
    },
    {
      src: '/assets/img/icons/P.svg',
      alt: 'P logo',
      href: 'https://www.instagram.com/',
    },
  ]
  return (
    <nav className={styles.nav}>
      {is565 && <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />}
      {!is565 ? (
        <ul className={styles.navList}>
          {navList.map((link) => (
            <li className={styles.navList__text} key={link}>
              <Link href={'/'}>{link}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <Image
          className={styles.white}
          src={'/assets/img/menu.svg'}
          alt="menu"
          width={24}
          height={24}
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
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

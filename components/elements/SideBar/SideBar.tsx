import React, { useState } from 'react'
import styles from './SideBar.module.scss'
import { sideBarInterface, navListType } from '@/types/header'
import { navList } from '@/utils/additionalLists'
import Link from 'next/link'
import Image from 'next/image'
const SideBar = ({ isOpen, setIsOpen }: sideBarInterface) => {
  const [isFirstRender, setIsNotFirstRender] = useState(true)
  const openSideBar = () => {
    setIsOpen(!isOpen)
    setIsNotFirstRender(false)
  }

  const createNav = (navList: navListType[]) => {
    return (
      <div className={styles.container}>
        <Image
          src={'/assets/img/bannerLogo.svg'}
          alt="TasteEat logo"
          width={160}
          height={80}
          priority
        />
        <p className={`${styles.title} ${styles.text}`}>TasteEat</p>
        <p className={styles.underline} />
        {navList.map((nav) => (
          <p key={nav.title} className={`${styles.link} ${styles.text}`}>
            <Link href={nav.href} onClick={() => setIsOpen(false)}>
              {nav.title}
            </Link>
          </p>
        ))}
      </div>
    )
  }

  return (
    <>
      {isOpen && <div onClick={openSideBar} className={styles.overlay} />}
      <div
        className={`${styles.sideBar} ${
          isOpen ? styles.open : !isFirstRender ? styles.close : null
        }`}
      >
        {createNav(navList)}
      </div>
    </>
  )
}

export default SideBar

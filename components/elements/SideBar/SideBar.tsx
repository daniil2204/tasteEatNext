import React, { useState } from 'react'
import styles from './SideBar.module.scss'
import { sideBarInterface, navListType } from '@/types/header'
import { navList } from '@/utils/additionalLists'
import Link from 'next/link'
const SideBar = ({ isOpen, setIsOpen }: sideBarInterface) => {
  const [isFirstRender, setIsNotFirstRender] = useState(true)
  const openSideBar = () => {
    setIsOpen(!isOpen)
    setIsNotFirstRender(false)
  }

  const createNav = (navList: navListType[]) => {
    console.log('')
    return (
      <div>
        {navList.map((nav) => (
          <Link key={nav.title} href={nav.href}>
            {nav.title}
          </Link>
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

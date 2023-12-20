import React, { useState } from 'react'
import styles from './SideBar.module.scss'
import { sideBarInterface } from '@/types/header'
const SideBar = ({ isOpen, setIsOpen }: sideBarInterface) => {
  const [isFirstRender, setIsNotFirstRender] = useState(true)
  const openSideBar = () => {
    setIsOpen(!isOpen)
    setIsNotFirstRender(false)
  }
  return (
    <>
      {isOpen && <div onClick={openSideBar} className={styles.overlay} />}
      <div
        className={`${styles.sideBar} ${
          isOpen ? styles.open : !isFirstRender ? styles.close : null
        }`}
      >
        <p>SideBar</p>
      </div>
    </>
  )
}

export default SideBar

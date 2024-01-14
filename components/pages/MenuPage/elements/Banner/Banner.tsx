import React from 'react'
import styles from './Banner.module.scss'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <p className={styles.title}>Try Our Special dishes</p>
      <p className={styles.subTitle}>
        Every time you perfectly dine with us, it should happy for great
        inspired food in an environment designed with individual touches unique
        to the local area.
      </p>
      <div className={styles.imgContainer}>
        <Image src="/assets/img/MenuBannerImg.svg" fill alt="banner" />
      </div>
    </div>
  )
}

export default Banner

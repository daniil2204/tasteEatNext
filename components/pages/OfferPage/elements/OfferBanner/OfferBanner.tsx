import React from 'react'
import styles from './OfferBanner.module.scss'
import Image from 'next/image'
import { whatWeOfferBannerInterface } from '@/types/offer'

const OfferBanner = ({ title, src, alt }: whatWeOfferBannerInterface) => {
  console.log('')
  return (
    <div className={styles.banner}>
      <div className={styles.imgContainer}>
        <Image src={src} fill alt={alt} />
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  )
}

export default OfferBanner

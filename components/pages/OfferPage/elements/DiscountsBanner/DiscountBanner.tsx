import React from 'react'
import { discountBannerInterface } from '@/types/offer'
import Image from 'next/image'
import styles from './DiscountBanner.module.scss'

const DiscountBanner = ({
  bgSrc,
  cloud,
  textColor,
}: discountBannerInterface) => {
  console.log(bgSrc)
  return (
    <div
      className={styles.discount}
      style={{ backgroundImage: `url(${bgSrc})` }}
    >
      <div className={styles.left}>
        <div className={styles.imgCloudContainer}>
          <Image fill src={cloud} alt="price" />
          <p
            className={styles.imgCloudContainer__price}
            style={{ color: textColor }}
          >
            $34
          </p>
        </div>
        <p className={`${styles.text} ${styles.offerText}`}>50% Offer Going</p>
        <p className={`${styles.text} ${styles.title}`}>Chicken Burger</p>
        <p className={`${styles.text} ${styles.description}`}>
          Chicken burger with the tasty toppings and leaves.
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.imgPhotoContainer}>
          <Image
            fill
            src={`/assets/img/BannerBurgerTest.svg`}
            alt="dish photo"
          />
        </div>
      </div>
    </div>
  )
}

export default DiscountBanner

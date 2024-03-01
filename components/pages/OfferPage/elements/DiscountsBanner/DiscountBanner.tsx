import React from 'react'
import { discountBannerInterface } from '@/types/offer'
import Image from 'next/image'
import styles from './DiscountBanner.module.scss'
import { getPrice } from '@/utils/getPrice'

const DiscountBanner = ({ bannerStyles, dish }: discountBannerInterface) => {
  const { bgSrc, cloud, textColor } = bannerStyles
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
            ${getPrice(dish.price, dish.discount)}
          </p>
        </div>
        <p className={`${styles.text} ${styles.offerText}`}>
          {dish.discount}% Offer Going
        </p>
        <p className={`${styles.text} ${styles.title}`}>{dish.title}</p>
        <p className={`${styles.text} ${styles.description}`}>
          {dish.description}
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.imgPhotoContainer}>
          <Image fill src={dish.image ? dish.image : ''} alt="dish photo" />
        </div>
      </div>
    </div>
  )
}

export default DiscountBanner

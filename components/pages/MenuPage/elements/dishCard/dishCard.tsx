import React from 'react'
import styles from './DishCard.module.scss'
import Image from 'next/image'
import { DishInterface } from '@/types/dishCard'
import { getPrice } from '@/utils/getPrice'

const DishCard = ({
  id,
  description,
  images,
  price,
  title,
  discount,
}: DishInterface) => {
  return (
    <div key={id} className={styles.dishContainer}>
      <div className={styles.dishImg}>
        <Image src={images[0].url} alt="Dish Image" fill />
      </div>
      <div className={styles.titleAndPrice}>
        <p className={`${styles.text} ${styles.dishTitle}`}>{title}</p>
        <p
          className={`${styles.text} ${styles.dishPrice}`}
          style={{ color: discount ? 'red' : '' }}
        >
          ${getPrice(price, discount)}
        </p>
      </div>
      <p className={styles.underline} />
      <p className={`${styles.text} ${styles.description}`}>{description}</p>
    </div>
  )
}

export default DishCard

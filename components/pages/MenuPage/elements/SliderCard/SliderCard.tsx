import React from 'react'
import Image from 'next/image'
import styles from './SliderCard.module.scss'
import { dishSliderInterface } from '@/types/slider'
import Link from 'next/link'

const SliderCard = ({
  id,
  description,
  price,
  title,
  image,
}: dishSliderInterface) => {
  return (
    <Link href="/" className={styles.dish}>
      <div className={styles.dish__left}>
        <div className={styles.img}>
          <Image src={image} alt="test" fill style={{ borderRadius: '50%' }} />
        </div>
        <div className={styles.text}>
          <p className={styles.text__title}>{title}</p>
          <p className={styles.text__desc}>{description}</p>
        </div>
      </div>
      <div className={styles.dish__right}>
        <p className={styles.text__title}>${price}</p>
      </div>
    </Link>
  )
}

export default SliderCard

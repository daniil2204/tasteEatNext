import React from 'react'
import Image from 'next/image'
import styles from './SliderCard.module.scss'
import { dishSliderInterface } from '@/types/slider'
import Link from 'next/link'
import { getPrice } from '@/utils/getPrice'

const SliderCard = ({
  id,
  description,
  price,
  title,
  image,
  discount,
}: dishSliderInterface) => {
  return (
    <div className={styles.dish}>
      <div className={styles.dish__left}>
        <div className={styles.img}>
          <Image src={image} alt="test" fill style={{ borderRadius: '50%' }} />
        </div>
        <div className={styles.text}>
          <Link href={'/'}>
            <p className={styles.text__title}>{title}</p>
          </Link>
          <p className={styles.text__desc}>{description}</p>
        </div>
      </div>
      <div className={styles.dish__right}>
        <p
          style={{ color: discount ? 'red' : '' }}
          className={styles.text__title}
        >
          ${getPrice(price, discount)}
        </p>
      </div>
    </div>
  )
}

export default SliderCard

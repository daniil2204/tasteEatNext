import React from 'react'
import Image from 'next/image'
import styles from './SliderCard.module.scss'
import { dishSliderInterface } from '@/types/slider'
import { getPrice } from '@/utils/getPrice'
import Link from 'next/link'

const SliderCard = ({
  id,
  description,
  price,
  title,
  image,
  discount,
}: dishSliderInterface) => {
  return (
    <>
      <div className={styles.dish}>
        <div className={styles.dish__left}>
          <div className={styles.img}>
            <Image
              src={image}
              alt={title}
              fill
              style={{ borderRadius: '50%' }}
            />
          </div>
          <div className={styles.text}>
            <p className={styles.text__title}>{title}</p>
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
        <Link
          className={styles.addBtn}
          scroll={false}
          href={`/menu?dishId=${id}&modal=true`}
        >
          Add to Bucket
        </Link>
      </div>
    </>
  )
}

export default SliderCard

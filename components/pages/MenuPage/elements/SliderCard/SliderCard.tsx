import React from 'react'
import Image from 'next/image'
import styles from './SliderCard.module.scss'

const SliderCard = () => {
  return (
    <div className={styles.dish}>
      <div className={styles.dish__left}>
        <div className={styles.img}>
          <Image
            src="/assets/img/dishImgSlider.svg"
            alt="test"
            fill
            style={{ borderRadius: '50%' }}
          />
        </div>
        <div className={styles.text}>
          <p className={styles.text__title}>Raw Scallops from Erquy</p>
          <p className={styles.text__desc}>
            Shuck the scallop to that used for oysters
          </p>
        </div>
      </div>
      <div className={styles.dish__right}>
        <p className={styles.text__title}>$40</p>
      </div>
    </div>
  )
}

export default SliderCard

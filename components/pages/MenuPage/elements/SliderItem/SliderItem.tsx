import React from 'react'
import { sliderType } from '@/types/slider'
import styles from './SliderItem.module.scss'
import Image from 'next/image'

const SliderItem = ({ type }: sliderType) => {
  return (
    <div className={styles.sliderItem}>
      <p className={styles.sliderTypeTitle}>{type}</p>
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
        </div>
        <div className={styles.dish__right}></div>
      </div>
    </div>
  )
}

export default SliderItem

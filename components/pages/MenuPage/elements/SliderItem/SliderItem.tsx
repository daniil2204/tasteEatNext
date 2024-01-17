import React, { useEffect } from 'react'

import { sliderType } from '@/types/slider'
import styles from './SliderItem.module.scss'
import SliderCard from '../SliderCard/SliderCard'

const SliderItem = ({ type }: sliderType) => {
  return (
    <div className={styles.sliderItem}>
      <p className={styles.sliderTypeTitle}>{type}</p>
      <SliderCard />
      <SliderCard />
      <SliderCard />
      <SliderCard />
    </div>
  )
}

export default SliderItem

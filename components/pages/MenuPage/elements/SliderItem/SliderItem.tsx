import React, { useEffect } from 'react'

import { sliderType } from '@/types/slider'
import styles from './SliderItem.module.scss'
import SliderCard from '../SliderCard/SliderCard'

const SliderItem = ({ type, dishes }: sliderType) => {
  return (
    <div className={styles.sliderItem}>
      <p className={styles.sliderTypeTitle}>{type}</p>
      {dishes.map((dish) => (
        <SliderCard
          key={dish.id}
          id={dish.id}
          description={dish.description}
          image={dish.image}
          title={dish.title}
          price={dish.price}
        />
      ))}
    </div>
  )
}

export default SliderItem

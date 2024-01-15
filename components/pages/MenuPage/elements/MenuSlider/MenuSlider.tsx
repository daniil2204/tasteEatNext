import React from 'react'

import styles from './MenuSlider.module.scss'
import Slider from '../MySlider/MySlider'
import Banner from '../Banner/Banner'
import { typeOfFoodList } from '@/utils/additionalLists'

const MenuSlider = () => {
  return (
    <div className={styles.menu}>
      <Banner />
      <Slider />
    </div>
  )
}

export default MenuSlider

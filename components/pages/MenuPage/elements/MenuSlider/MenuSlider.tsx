import React from 'react'

import styles from './MenuSlider.module.scss'
import MySlider from '../MySlider/MySlider'
import Banner from '../Banner/Banner'

const MenuSlider = () => {
  return (
    <div className={styles.menu}>
      <Banner />
      <MySlider />
    </div>
  )
}

export default MenuSlider

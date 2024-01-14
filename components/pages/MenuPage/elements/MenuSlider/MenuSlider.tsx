'use client'
import React from 'react'
import Slider from 'react-slick'
import styles from './MenuSlider.module.scss'
import SliderItem from '../SliderItem/SliderItem'
import Banner from '../Banner/Banner'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MenuSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className={styles.menu}>
      <Banner />
      <Slider {...settings} className={styles.slider}>
        <SliderItem />
        <SliderItem />
        <SliderItem />
      </Slider>
    </div>
  )
}

export default MenuSlider

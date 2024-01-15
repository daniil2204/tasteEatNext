'use client'
import React from 'react'
import Slider from 'react-slick'
import SliderItem from '../SliderItem/SliderItem'
import { typeOfFoodList } from '@/utils/additionalLists'
import styles from '../MenuSlider/MenuSlider.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MySlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <Slider {...settings} className={styles.slider}>
        {typeOfFoodList.map((type) => (
          <SliderItem key={type} type={type} />
        ))}
      </Slider>
    </>
  )
}

export default MySlider

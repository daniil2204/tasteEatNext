'use client'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import SliderItem from '../SliderItem/SliderItem'
import { getDishesAndType } from '@/services/getDishesByType'
import { dishesAndCategory } from '@/types/slider'
import styles from '../MenuSlider/MenuSlider.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MySlider = () => {
  const [data, setData] = useState<dishesAndCategory[]>([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    onRequest()
  }, [])

  const onRequest = async () => {
    setLoading(true)
    getDishesAndType()
      .then((res) => setData([...res, ...data]))
      .then(() => setLoading(false))
      .catch(() => console.log('err'))
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      {!loading && (
        <Slider {...settings} className={styles.slider}>
          {data.map((dishes) => (
            <SliderItem key={dishes.type} type={dishes.type} />
          ))}
        </Slider>
      )}
    </>
  )
}

export default MySlider

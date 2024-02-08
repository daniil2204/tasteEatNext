'use client'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import SliderItem from '../SliderItem/SliderItem'
import { getDishesAndType } from '@/app/api/dish'
import { dishesAndCategory } from '@/types/slider'
import styles from '../MenuSlider/MenuSlider.module.scss'
import Spinner from '@/components/elements/Spinner/Spinner'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MySlider = () => {
  const [data, setData] = useState<dishesAndCategory[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    onRequest()
  }, [])

  const onRequest = async () => {
    setLoading(true)
    const local = localStorage.getItem('dishesAndCategories')
    if (local) {
      setData(JSON.parse(local))
      setLoading(false)
    } else {
      getDishesAndType()
        .then((res) => {
          setData([...res, ...data])
          localStorage.setItem('dishesAndCategories', JSON.stringify(res))
        })
        .then(() => setLoading(false))
        .catch(() => setError(true))
    }
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const createSlider = () => {
    return (
      <Slider {...settings} className={styles.slider}>
        {data.map((dishes) => (
          <SliderItem
            key={dishes.type}
            type={dishes.type}
            dishes={dishes.dishes}
          />
        ))}
      </Slider>
    )
  }

  return (
    <>
      {loading && <Spinner />}
      {error && <div>Error</div>}
      {!loading && !error && data.length ? createSlider() : null}
    </>
  )
}

export default MySlider

'use client'
import React from 'react'
import Slider from 'react-slick'
import SliderItem from '../SliderItem/SliderItem'
import { getDishesAndType } from '@/app/api/dish'
import styles from '../MenuSlider/MenuSlider.module.scss'
import Spinner from '@/components/elements/Spinner/Spinner'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useQuery } from '@tanstack/react-query'
import { IArrow } from '@/types/slider'

const MySlider = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['dishSlider'],
    queryFn: async () => await getDishesAndType(),
  })

  const Arrow = (props: IArrow) => {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{
          ...style,
          backgroundColor: 'gray',
          width: 40,
          height: 40,
          borderRadius: 50,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: -30,
          marginRight: -30,
        }}
        onClick={onClick}
      />
    )
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'slides',
    dots: true,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  }

  const createSlider = () => {
    return (
      <Slider {...settings} className={styles.slider}>
        {data &&
          data.map((dishes) => (
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
      {isLoading && <Spinner />}
      {isError && <div>Error</div>}
      {!isLoading && !isError && data && data.length ? createSlider() : null}
    </>
  )
}

export default MySlider

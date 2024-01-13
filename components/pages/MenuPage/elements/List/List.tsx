'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import { getDishes } from '@/services/getDishes'
import { DishInterface } from '@/types/dishCard'
import DishCard from '@/components/pages/MenuPage/elements/dishCard/dishCard'
import styles from './List.module.scss'

const List = () => {
  const [dishes, setDishes] = useState<DishInterface[]>([])
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(false)

  const onRequest = async (offset: number) => {
    setLoading(true)
    getDishes(offset)
      .then((res) => setDishes([...dishes, ...res]))
      .then(() => setLoading(false))
      .then(() => setOffset(offset + 4))
  }

  useEffect(() => {
    onRequest(offset)
  }, [])

  const createDish = (dishes: DishInterface[]) => {
    console.log('')
    return (
      <div className={styles.menuGrid}>
        {dishes.map((dish) => (
          <DishCard
            key={dish.id}
            id={dish.id}
            description={dish.description}
            images={dish.images}
            price={dish.price}
            title={dish.title}
          />
        ))}
      </div>
    )
  }
  return (
    <>
      {createDish(dishes)}
      {loading && <div>Loading</div>}
      <button className={styles.btn} onClick={() => onRequest(offset)}>
        <p>Load More</p>
      </button>
    </>
  )
}

export default List

'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import { getDishes } from '@/services/getDishes'
import { DishInterface } from '@/types/dishCard'
import DishCard from '@/components/pages/MenuPage/elements/dishCard/dishCard'
import styles from './List.module.scss'
import Spinner from '@/components/elements/Spinner/Spinner'

const List = () => {
  const [dishes, setDishes] = useState<DishInterface[]>([])
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [end, setEnd] = useState(false)

  const onRequest = async (offset: number) => {
    setLoading(true)
    getDishes(offset)
      .then((res) => {
        setDishes([...dishes, ...res])
        res.length !== 4 ? setEnd(true) : null
      })
      .then(() => setLoading(false))
      .then(() => setOffset(offset + 4))
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }

  useEffect(() => {
    onRequest(offset)
  }, [])

  const createDish = (dishes: DishInterface[]) => {
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
      {!error && (
        <>
          {createDish(dishes)}
          {loading && <Spinner />}
          <button
            className={styles.btn}
            onClick={() => onRequest(offset)}
            disabled={end}
            style={end ? { display: 'none' } : { display: 'inline' }}
          >
            <p>Load More</p>
          </button>
        </>
      )}
    </>
  )
}

export default List

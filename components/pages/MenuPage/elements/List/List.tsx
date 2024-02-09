'use client'
import React from 'react'
import { useState } from 'react'
import { getDishes } from '@/app/api/dish'
import { DishInterface } from '@/types/dishCard'
import DishCard from '@/components/pages/MenuPage/elements/DishCard/DishCard'
import styles from './List.module.scss'
import Spinner from '@/components/elements/Spinner/Spinner'
import { useQuery } from '@tanstack/react-query'

const List = () => {
  //const [dishes, setDishes] = useState<DishInterface[]>([])
  //const [loading, setLoading] = useState(false)
  //const [error, setError] = useState(false)
  //const [end, setEnd] = useState(false)

  // const onRequest = async (offset: number) => {
  //   setLoading(true)
  //   const local = localStorage.getItem('dishesList')

  //   if (local && offset === 0) {
  //     setDishes(JSON.parse(local))
  //     if (JSON.parse(local).length % 4 !== 0) {
  //       setEnd(true)
  //     }
  //     setLoading(false)
  //   } else {
  //     getDishes({ offset, likes: true })
  //       .then((res) => {
  //         setDishes([...dishes, ...res])
  //         localStorage.setItem(
  //           'dishesList',
  //           JSON.stringify([...dishes, ...res])
  //         )
  //         res.length !== 4 ? setEnd(true) : null
  //       })
  //       .then(() => setLoading(false))
  //       .then(() => setOffset(offset + 4))
  //       .catch(() => {
  //         setError(true)
  //         setLoading(false)
  //       })
  //   }
  // }

  // useEffect(() => {
  //   onRequest(offset)
  // }, [])

  const [offset, setOffset] = useState(0)
  const { data, isLoading, isError } = useQuery({
    queryKey: ['dishList'],
    queryFn: async () => await getDishes({ offset }),
  })

  const createDish = (dishes: DishInterface[]) => {
    return (
      <div className={styles.menuGrid}>
        {!isLoading &&
          data.map((dish) => (
            <DishCard
              key={dish.id}
              id={dish.id}
              description={dish.description}
              images={dish.images}
              price={dish.price}
              title={dish.title}
              discount={dish.discount}
            />
          ))}
      </div>
    )
  }
  return (
    <>
      {!isError && (
        <>
          {data && createDish(data)}
          {isLoading && <Spinner />}
          <button
            className={styles.btn}
            onClick={() => setOffset((offset) => offset + 4)}
            disabled={data ? data?.length % 4 !== 0 : false}
            style={
              data && data?.length % 4 !== 0
                ? { display: 'none' }
                : { display: 'inline' }
            }
          >
            <p>Load More</p>
          </button>
        </>
      )}
    </>
  )
}

export default List

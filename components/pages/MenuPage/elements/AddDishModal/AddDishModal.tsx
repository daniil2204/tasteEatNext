'use client'
import React, { useState } from 'react'
import styles from './AddDishModal.module.scss'
import { useQuery } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'
import { getDishById } from '@/app/api/dish'
import Image from 'next/image'
import Spinner from '@/components/elements/Spinner/Spinner'
import { useAppContext } from '@/context/user'
import { addDishToBucket } from '@/app/api/bucket'
import { toast } from 'react-toastify'

const AddDishModal: React.FC = () => {
  const searchParams = useSearchParams()
  const dishId = searchParams.get('dishId')
  const router = useRouter()
  const { user } = useAppContext()

  const { data, isError, isLoading } = useQuery({
    queryKey: [dishId],
    queryFn: async () => await getDishById(dishId ? +dishId : null),
  })
  const [count, setCount] = useState(1)
  if (!dishId || isError) {
    router.push('/menu')
    return
  }

  const changeCount = (operation: '+' | '-') => {
    if (operation === '+') {
      setCount((count) => count + 1)
    } else {
      if (count !== 1) {
        setCount((count) => count - 1)
      }
    }
  }

  const addDish = async () => {
    console.log('hello')
    if (user) {
      try {
        await addDishToBucket({ count, dishId: +dishId })
        toast.success('Dish was added to bucket')
      } catch (err) {
        toast.error('Sorry, try it later')
      }
    } else {
      toast.error('Please login or register')
    }
  }

  return (
    <div className={styles.modal}>
      <div className={styles.closeImgContainer}>
        <Image
          src={'/assets/img/closeIcon.svg'}
          alt="close"
          fill
          onClick={() => router.push('/menu', { scroll: false })}
        />
      </div>
      {isLoading && <Spinner />}
      {data && data.images && (
        <>
          <div className={styles.imgConteiner}>
            <Image src={data?.images[0].url} alt={data?.title} fill />
          </div>
          <p className={styles.title}>{data?.title}</p>
          <p className={styles.details}>
            Ingredients - {data.ingredients.join(',')}
          </p>
          <p className={styles.details}>Description - {data.description}</p>
          <p className={styles.details}>Weight - {data.weight}g</p>
          <div className={styles.countContainer}>
            <button
              onClick={() => changeCount('-')}
              className={styles.countBtn}
            >
              -
            </button>
            <p style={{ fontSize: 32 }}>{count}</p>
            <button
              onClick={() => changeCount('+')}
              className={styles.countBtn}
            >
              +
            </button>
          </div>
          <button onClick={addDish} className={styles.addBtn}>
            Add
          </button>
        </>
      )}
    </div>
  )
}

export default AddDishModal

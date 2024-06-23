'use client'
import React from 'react'
import styles from './AddDishModal.module.scss'
import { useQuery } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'
import { getDishById } from '@/app/api/dish'
import Image from 'next/image'
import Spinner from '@/components/elements/Spinner/Spinner'

const AddDishModal: React.FC = () => {
  const searchParams = useSearchParams()
  const dishId = searchParams.get('dishId')
  const router = useRouter()

  const { data, isError, isLoading } = useQuery({
    queryKey: [dishId],
    queryFn: async () => await getDishById(dishId ? +dishId : null),
  })

  if (!dishId || isError) {
    router.push('/menu')
    return
  }

  return (
    <div className={styles.modal}>
      {isLoading && <Spinner />}
      {data && data.images && (
        <>
          <Image
            src={data?.images[0].url}
            alt={data?.title}
            width={200}
            height={200}
          />
          <p className={styles.title}>{data?.title}</p>
          <p className={styles.details}>
            Ingredients - {data.ingredients.join(',')}
          </p>
          <p className={styles.details}>Description - {data.description}</p>
          <p className={styles.details}>Weight - {data.weight}g</p>
          <div className={styles.countContainer}>
            <p>-</p>
            <p>1</p>
            <p>+</p>
          </div>
          <button>Add</button>
        </>
      )}
    </div>
  )
}

export default AddDishModal

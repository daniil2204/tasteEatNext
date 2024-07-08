'use client'
import React, { useState } from 'react'
import styles from './AddDishModal.module.scss'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'
import { getDishById } from '@/app/api/dish'
import Image from 'next/image'
import Spinner from '@/components/elements/Spinner/Spinner'
import { useAppContext } from '@/context/user'
import { addDishToBucket } from '@/app/api/bucket'
import { toast } from 'react-toastify'
import ChangeCountBtn from '@/components/elements/ChangeCountBtn/ChangeCountBtn'
import { addDishToBucketType } from '@/types/bucket'

const AddDishModal: React.FC = () => {
  const searchParams = useSearchParams()
  const dishId = searchParams.get('dishId')
  const router = useRouter()
  const { user } = useAppContext()
  const [count, setCount] = useState(1)
  const queryClient = useQueryClient()

  const { data, isError, isLoading } = useQuery({
    queryKey: [dishId],
    queryFn: async () => await getDishById(dishId ? +dishId : null),
  })
  const mutation = useMutation({
    mutationFn: (addToBucket: addDishToBucketType) =>
      addDishToBucket(addToBucket),
    onSuccess: () => {
      toast.success('Dish was added to bucket', { position: 'bottom-right' })
      queryClient.invalidateQueries({ queryKey: ['userBucket'] })
      router.push('/menu', { scroll: false })
    },
    onError: () => {
      toast.error('Sorry, try it later', { position: 'bottom-right' })
    },
  })

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
    if (!user) {
      toast.error('Please login or register', { position: 'bottom-right' })
      return
    }
    if (dishId) {
      mutation.mutate({ count: count, dishId: +dishId })
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
            <ChangeCountBtn func={() => changeCount('-')} text="-" />
            <p style={{ fontSize: 32 }}>{count}</p>
            <ChangeCountBtn func={() => changeCount('+')} text="+" />
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

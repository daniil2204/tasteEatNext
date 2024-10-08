'use client'
import React, { useRef, useState } from 'react'
import styles from './DishCardBucket.module.scss'
import ChangeCountBtn from '@/components/elements/ChangeCountBtn/ChangeCountBtn'
import { addDishToBucketType, IUserBucketItem } from '@/types/bucket'
import Image from 'next/image'
import { getPrice } from '@/utils/getPrice'
import { changeDishCount } from '@/app/api/bucket'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import Spinner from '@/components/elements/Spinner/Spinner'

const DishCardBucket = ({ bucketItem }: { bucketItem: IUserBucketItem }) => {
  const [count, setCount] = useState(bucketItem.count)
  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationFn: (changeCount: addDishToBucketType) =>
      changeDishCount({ count: changeCount.count, dishId: changeCount.dishId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userBucket'] })
    },
    onError: () => {
      toast.error('Sorry, error happened', { position: 'bottom-right' })
    },
  })
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const changeCount = (operation: '+' | '-') => {
    if (count === 0) {
      return
    }
    const newCount = operation === '+' ? count + 1 : count - 1
    setCount(newCount)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      mutate({
        count: newCount,
        dishId: bucketItem.dishId,
      })
    }, 1000)
  }
  return (
    <div className={styles.dishContainer}>
      {!isPending ? (
        <>
          <p className={styles.title}>{bucketItem.title}</p>
          <div className={styles.info}>
            <div className={styles.imgContainer}>
              <Image
                style={{ borderRadius: 15 }}
                alt={bucketItem.title}
                src={bucketItem.image}
                fill
              />
            </div>
            <div className={styles.countContainer}>
              <ChangeCountBtn func={() => changeCount('+')} text="+" />
              <p className={styles.count}>{count}</p>
              <ChangeCountBtn func={() => changeCount('-')} text="-" />
            </div>
            <p className={styles.price}>
              Price -{' '}
              {Math.round(
                getPrice(bucketItem.price, bucketItem.discount) * count
              )}
              $
            </p>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  )
}

export default DishCardBucket

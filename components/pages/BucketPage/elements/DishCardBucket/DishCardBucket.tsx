'use client'
import React, { useState } from 'react'
import styles from './DishCardBucket.module.scss'
import ChangeCountBtn from '@/components/elements/ChangeCountBtn/ChangeCountBtn'
import { IUserBucketItem } from '@/types/bucket'
import Image from 'next/image'
import { getPrice } from '@/utils/getPrice'

const DishCardBucket = ({ bucketItem }: { bucketItem: IUserBucketItem }) => {
  const [count, setCount] = useState(bucketItem.count)
  const changeCount = (operation: '+' | '-') => {
    if (operation === '+') {
      setCount((count) => count + 1)
    } else {
      if (count !== 1) {
        setCount((count) => count - 1)
      }
    }
  }
  return (
    <div className={styles.dishContainer}>
      <p>{bucketItem.title}</p>
      <div className={styles.info}>
        <div style={{ width: 100, height: 100, position: 'relative' }}>
          <Image alt={bucketItem.title} src={bucketItem.image} fill />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <ChangeCountBtn func={() => changeCount('+')} text="+" />
          <p>{count}</p>
          <ChangeCountBtn func={() => changeCount('-')} text="-" />
        </div>
        <p>
          Price -{' '}
          {Math.round(getPrice(bucketItem.price, bucketItem.discount) * count)}$
        </p>
      </div>
    </div>
  )
}

export default DishCardBucket

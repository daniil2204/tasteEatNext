import React from 'react'
import styles from './BucketPage.module.scss'
import DishCard from './elements/DishCard/DishCardBucket'

const BucketPage = () => {
  return (
    <div className={styles.bucketPage}>
      <div className={styles.bucketContainer}>
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
      </div>
    </div>
  )
}

export default BucketPage

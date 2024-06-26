'use client'
import React from 'react'
import styles from './DishCardBucket.module.scss'
import ChangeCountBtn from '@/components/elements/ChangeCountBtn/ChangeCountBtn'

const DishCardBucket = () => {
  return (
    <div className={styles.dishContainer}>
      <p>TITLE</p>
      <div className={styles.info}>
        <p>IMAGE</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <ChangeCountBtn func={() => console.log('hello')} text="+" />
          <p>Count</p>
          <ChangeCountBtn func={() => console.log('hello')} text="-" />
        </div>
      </div>
    </div>
  )
}

export default DishCardBucket

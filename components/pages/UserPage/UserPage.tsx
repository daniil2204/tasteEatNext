'use client'
import React from 'react'
import styles from './UserPage.module.scss'
import { useAppContext } from '@/context/user'
import { useRedirect } from '@/hooks/useRedirect'

const UserPage = () => {
  const { user } = useAppContext()
  const { shouldLoadContent } = useRedirect('user')

  return (
    <>
      {shouldLoadContent && (
        <div className={styles.userPage}>
          <div className={styles.container}>
            <p className={styles.title}>{user?.name}</p>
            <div className={styles.infoContainer}>
              <p className={styles.info}>Email - {user?.email}</p>
              <p className={styles.info}>Phone - {user?.email}</p>
              <p className={styles.info}>Name - {user?.name}</p>
            </div>
          </div>
          <div className={styles.container}>
            <p className={styles.title}>Reservations</p>
            {user?.reservation.map((item) => (
              <div key={item.id} className={styles.reservationContainer}>
                <p>Table Number - {item.tableId}</p>
                <p>Book Hour - {item.bookHour}</p>
                <p>Hour Count - {item.hourCount}</p>
                <p>
                  Date - {item.day}/{item.month}/{item.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default UserPage

'use client'
import React, { useEffect, useState } from 'react'
import styles from './UserPage.module.scss'
import { useAppContext } from '@/context/user'
import { useRedirect } from '@/hooks/useRedirect'
import { useRouter } from 'next/navigation'
import { IGetReservationById } from '@/types/reservation'
import { getUserReservations } from '@/app/api/reservation'

const UserPage = () => {
  const { user, setUser } = useAppContext()
  const { shouldLoadContent } = useRedirect('user')
  const [reservations, setReservations] = useState<IGetReservationById[]>([])
  const router = useRouter()

  useEffect(() => {
    setUserReservations()
  }, [])

  const setUserReservations = async () => {
    const userReservations = await getUserReservations()
    setReservations(userReservations.reservation)
  }

  const logOut = () => {
    setUser(null)
    localStorage.removeItem('token')
    router.push('/')
  }

  return (
    <>
      {shouldLoadContent && (
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <div className={styles.userPage}>
            <div className={styles.container}>
              <p className={styles.title}>{user?.name}</p>
              <div className={styles.infoContainer}>
                <p className={styles.info}>Email - {user?.email}</p>
                <p className={styles.info}>Phone - {user?.email}</p>
                <p className={styles.info}>Name - {user?.name}</p>
              </div>
            </div>
            {reservations.length > 0 && (
              <div className={styles.container}>
                <p className={styles.title}>Reservations</p>
                {reservations.map((item) => (
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
            )}
          </div>
          <button onClick={logOut} className={styles.btn}>
            Exit
          </button>
        </div>
      )}
    </>
  )
}

export default UserPage

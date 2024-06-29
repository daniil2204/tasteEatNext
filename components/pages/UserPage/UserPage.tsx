'use client'
import React from 'react'
import styles from './UserPage.module.scss'
import { useAppContext } from '@/context/user'
import { useRedirect } from '@/hooks/useRedirect'
import { useRouter } from 'next/navigation'
import { getUserReservations } from '@/app/api/reservation'
import { useQuery } from '@tanstack/react-query'

const UserPage = () => {
  const { user, setUser } = useAppContext()
  const { shouldLoadContent } = useRedirect('user')
  const { data, isLoading, isError } = useQuery({
    queryKey: ['userReservations'],
    queryFn: async () => await getUserReservations(),
  })
  const router = useRouter()

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
            {!isLoading && data && !isError && (
              <div className={styles.container}>
                <p className={styles.title}>Reservations</p>
                {data.map((item) => (
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

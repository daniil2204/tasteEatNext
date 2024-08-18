'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { getReservationById } from '@/app/api/reservation'
import styles from './ReservationUser.module.scss'
import { useQuery } from '@tanstack/react-query'
import Spinner from '@/components/elements/Spinner/Spinner'
import { toast } from 'react-toastify'

const ReservationUser = ({ id }: { id: string | string[] | undefined }) => {
  const router = useRouter()

  const { data, isLoading, isError } = useQuery({
    queryKey: [`reservationBy${id}`],
    queryFn: async () => {
      if (id) {
        return await getReservationById(+id)
      } else {
        router.push('/')
      }
    },
  })
  if (isError) {
    router.push('/')
    toast.error('Sorry, was a mistake', { position: 'bottom-right' })
  }
  return (
    <>
      {isLoading && <Spinner />}
      {data && (
        <div className={styles.reservationPage}>
          <div>
            <p>Reservation id - {data?.id}</p>
            <p>Reservation tableId - {data?.tableId}</p>
            <p>Reservation userId - {data?.userId}</p>
            <p>Reservation day - {data?.day}</p>
            <p>Reservation month - {data?.month}</p>
            <p>Reservation year - {data?.year}</p>
            <p>Reservation bookHour - {data?.bookHour}</p>
            <p>Reservation hourCount - {data?.hourCount}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default ReservationUser

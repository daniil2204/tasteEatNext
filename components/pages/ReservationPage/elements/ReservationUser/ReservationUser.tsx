'use client'
import { getReservationById } from '@/app/api/reservation'
import { IGetReservationById } from '@/types/reservation'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import styles from './ReservationUser.module.scss'

const ReservationUser = ({ id }: { id: string | string[] | undefined }) => {
  const [reservation, setReservation] = useState<IGetReservationById>()
  const router = useRouter()
  useEffect(() => {
    if (id) {
      getReservation(+id)
    }
  }, [id])
  const getReservation = async (id: number) => {
    const reservation = await getReservationById(id)
    if (reservation) {
      setReservation(reservation)
    } else {
      router.push('/')
    }
  }
  return (
    <div className={styles.reservationPage}>
      <div>
        <p>Reservation id - {reservation?.id}</p>
        <p>Reservation tableId - {reservation?.tableId}</p>
        <p>Reservation userId - {reservation?.userId}</p>
        <p>Reservation day - {reservation?.day}</p>
        <p>Reservation month - {reservation?.month}</p>
        <p>Reservation year - {reservation?.year}</p>
        <p>Reservation bookHour - {reservation?.bookHour}</p>
        <p>Reservation hourCount - {reservation?.hourCount}</p>
      </div>
    </div>
  )
}

export default ReservationUser

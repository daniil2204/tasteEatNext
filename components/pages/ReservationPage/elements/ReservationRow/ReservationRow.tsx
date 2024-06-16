'use client'
import React from 'react'
import styles from './ReservationRow.module.scss'
import { IReservationRow } from '@/types/reservation'

const ReservationRow = ({ id, countOfQuests, date }: IReservationRow) => {
  const makeBooking = async () => {
    console.log(date)
  }
  return (
    <div className={styles.reservation}>
      <p>Table № {id}</p>
      <p>Number of guests - {countOfQuests}</p>
      <button onClick={makeBooking} className={styles.reservation__button}>
        Book
      </button>
    </div>
  )
}

export default ReservationRow

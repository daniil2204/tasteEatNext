import React from 'react'
import styles from './ReservationRow.module.scss'
import { IReservationRow } from '@/types/reservation'

const ReservationRow = ({
  tableNumber,
  bookingTime,
  numberOfQuests,
}: IReservationRow) => {
  console.log()
  return (
    <div className={styles.reservation}>
      <p>Table № {tableNumber}</p>
      <p>Number of guests - {numberOfQuests}</p>
      <p>Booking time</p>
      <select className={styles.reservation__select}>
        {bookingTime.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      <button className={styles.reservation__button}>Book</button>
    </div>
  )
}

export default ReservationRow

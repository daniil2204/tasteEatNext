import React from 'react'
import styles from './ReservationTable.module.scss'

const ReservationTable = () => {
  console.log()
  return (
    <div className={styles.reservationTable}>
      <p>Reservation</p>
      <div className={styles.reservation}></div>
    </div>
  )
}

export default ReservationTable

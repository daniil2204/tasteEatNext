import React from 'react'
import ReservationRow from '../ReservationRow/ReservationRow'
import styles from './ReservationTable.module.scss'

const ReservationTable = () => {
  console.log()
  return (
    <div className={styles.reservationTable}>
      <p>Reservation</p>
      <ReservationRow
        tableNumber={2}
        numberOfQuests={3}
        bookingTime={[1, 2, 3]}
      />
      <ReservationRow tableNumber={5} numberOfQuests={2} bookingTime={[1, 2]} />
    </div>
  )
}

export default ReservationTable

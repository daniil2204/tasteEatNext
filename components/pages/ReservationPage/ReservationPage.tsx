import React from 'react'
import styles from './ReservationPage.module.scss'

const ReservationPage = () => {
  return (
    <section className={styles.reservationPage} about="reservation page">
      <div className={styles.formBg}>
        <p className={styles.title}>Reservation</p>
        <p className={styles.mainText}>Book Your Table</p>
      </div>
    </section>
  )
}

export default ReservationPage

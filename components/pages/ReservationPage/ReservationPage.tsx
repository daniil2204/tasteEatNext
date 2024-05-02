import React from 'react'
import styles from './ReservationPage.module.scss'
import { getMinAndMaxDate } from '@/utils/getMinAndMaxDate'

const ReservationPage = () => {
  const { minValue, maxValue } = getMinAndMaxDate(14)
  return (
    <section className={styles.reservationPage} about="reservation page">
      <div className={styles.formBg}>
        <p className={styles.title}>Reservation</p>
        <p className={styles.mainText}>Book Your Table</p>
        <input
          type="date"
          min={minValue}
          max={maxValue}
          style={{
            width: '130px',
            height: '35px',
            borderRadius: '15px',
            padding: '10px',
          }}
        />
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
    </section>
  )
}

export default ReservationPage

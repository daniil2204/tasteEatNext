'use client'
import React, { useRef, useState } from 'react'
import styles from './ReservationPage.module.scss'
import ReservationTable from './elements/ReservationTable/ReservationTable'
import { getMinAndMaxDate } from '@/utils/getMinAndMaxDate'

const ReservationPage = () => {
  const { minValue, maxValue } = getMinAndMaxDate(14)
  const [date, setDate] = useState<string>('')
  return (
    <section className={styles.reservationPage} about="reservation page">
      <div className={styles.formBg}>
        <p className={styles.title}>Reservation</p>
        <p className={styles.mainText}>Book Your Table</p>
        <div className={styles.settings}>
          <div className={styles.date}>
            <p className={styles.settings__text}>Select date</p>
            <input
              type="date"
              min={minValue}
              max={maxValue}
              className={styles.settings__inputs}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className={styles.count}>
            <p
              className={styles.settings__text}
              onClick={() => console.log(date)}
            >
              Select number of guests
            </p>
            <select className={styles.settings__inputs}>
              {[1, 2, 3, 4, 5].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>
        <button className={styles.reserveBtn}>Reserve a table</button>
        <ReservationTable />
      </div>
    </section>
  )
}

export default ReservationPage

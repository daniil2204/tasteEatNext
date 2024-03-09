import React from 'react'
import styles from './ReservationPage.module.scss'

const ReservationPage = () => {
  const day =
    new Date().getDate() > 10
      ? new Date().getDate()
      : `0${new Date().getDate()}`
  const month =
    new Date().getMonth() > 10
      ? new Date().getMonth() + 1
      : `0${new Date().getMonth() + 1}`
  const year = new Date().getFullYear()
  const minValue = `${year}-${month}-${day}`
  console.log(minValue)
  return (
    <section className={styles.reservationPage} about="reservation page">
      <div className={styles.formBg}>
        <p className={styles.title}>Reservation</p>
        <p className={styles.mainText}>Book Your Table</p>
        <input
          type="date"
          min={minValue}
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

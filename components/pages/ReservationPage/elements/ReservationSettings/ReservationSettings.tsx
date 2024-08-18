'use client'
import React, { useState } from 'react'
import { getMinAndMaxDate } from '@/utils/getMinAndMaxDate'
import styles from './ReservationSettings.module.scss'
import { fetchTablesInfo, reservationTypeDate } from '@/types/reservation'

const ReservationSettings = ({
  getTables,
}: {
  getTables: (fetchInfo: fetchTablesInfo) => void
}) => {
  const { minValue, maxValue } = getMinAndMaxDate(14)
  const [date, setDate] = useState<string>('')
  const [count, setCount] = useState<number>(1)
  const [errorDate, setErrorDate] = useState(false)

  const getFreeTables = () => {
    if (date) {
      try {
        const dateArr = date.split('-')
        const dateObj: reservationTypeDate = {
          year: +dateArr[0],
          month: +dateArr[1],
          day: +dateArr[2],
        }
        getTables({ date: dateObj, count: count })
      } catch (err) {
        setErrorDate(true)
      }
    } else {
      setErrorDate(true)
    }
  }

  const setReservationDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setDate(e.target.value)
      setErrorDate(false)
    }
  }

  const setCountOfGuests = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCount(+e.target.value)
  }

  return (
    <>
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
            onChange={(e) => setReservationDate(e)}
          />
          {errorDate && (
            <p style={{ color: 'red', textAlign: 'center' }}>Choose date</p>
          )}
        </div>
        <div className={styles.count}>
          <p className={styles.settings__text}>Select number of guests</p>
          <select
            onChange={setCountOfGuests}
            className={styles.settings__inputs}
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button onClick={getFreeTables} className={styles.reserveBtn}>
        Reserve a table
      </button>
    </>
  )
}

export default ReservationSettings

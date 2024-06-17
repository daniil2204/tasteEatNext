'use client'
import React, { useState } from 'react'
import styles from './ReservationRow.module.scss'
import { ICreateReservation, IReservationRow } from '@/types/reservation'
import { makeReservation } from '@/app/api/reservation'

const ReservationRow = ({
  id,
  countOfGuests,
  date,
  freeHours,
}: IReservationRow) => {
  const [selectedTime, setSelectedTime] = useState<number>()
  const [hourCount, setHourCount] = useState<number>()

  const createReservation = async () => {
    if (date && selectedTime && hourCount) {
      const reservation: ICreateReservation = {
        bookHour: selectedTime,
        hourCount: hourCount,
        day: date?.day,
        month: date?.month,
        year: date?.year,
        tableId: id,
      }
      const test = await makeReservation(reservation)
    }
  }

  return (
    <div className={styles.reservation}>
      <div className={styles.reservation__info}>
        <p>Table № {id}</p>
        <p onClick={() => console.log(hourCount)}>
          Number of guests - {countOfGuests}
        </p>
      </div>
      <div className={styles.timeContainer}>
        {freeHours.map((item) => (
          <p
            key={item}
            onClick={() => setSelectedTime(item)}
            className={styles.timeElement}
            style={{
              backgroundColor: `${selectedTime === item ? '#E1B168' : ''}`,
            }}
          >
            {item}
          </p>
        ))}
      </div>
      <div className={styles.reservationBtn}>
        <p>Select booking time</p>
        <select onChange={(e) => setHourCount(+e.target.value)}>
          {[1, 2, 3].map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <button
          onClick={createReservation}
          className={styles.reservation__button}
        >
          Book
        </button>
      </div>
    </div>
  )
}

export default ReservationRow

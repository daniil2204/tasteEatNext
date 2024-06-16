import React from 'react'
import ReservationRow from '../ReservationRow/ReservationRow'
import styles from './ReservationTable.module.scss'
import { IReservatioTable } from '@/types/reservation'
import Spinner from '@/components/elements/Spinner/Spinner'

const ReservationTable = ({
  freeTables,
  loading,
  error,
  date,
}: IReservatioTable) => {
  return (
    <div className={styles.reservationTable}>
      <p className={styles.reservationTitle}>Reservations</p>
      {!loading ? (
        freeTables.length > 0 ? (
          freeTables.map((item) => (
            <ReservationRow
              countOfQuests={item.countOfQuests}
              id={item.id}
              key={item.id}
              date={date}
            />
          ))
        ) : !error ? (
          <p className={styles.reservationWarning}>
            Select the date and number of guests
          </p>
        ) : (
          <p className={styles.reservationWarning}>{error}</p>
        )
      ) : (
        <Spinner />
      )}
    </div>
  )
}

export default ReservationTable

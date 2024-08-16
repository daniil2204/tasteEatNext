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
      {!loading ? (
        freeTables.length > 0 ? (
          <div>
            <div className={styles.table}>
              {freeTables.map((item) => (
                <ReservationRow
                  countOfGuests={item.table.countOfGuests}
                  id={item.table.id}
                  key={item.table.id}
                  date={date}
                  freeHours={item.freeHours}
                />
              ))}
            </div>
            {/* {freeTables.length > 4 ? (
              <div className={styles.arrows}>
                <button className={styles.arrow}>{`<`}</button>
                <button className={styles.arrow}>{`>`}</button>
              </div>
            ) : null} */}
          </div>
        ) : freeTables.length === 0 && !error ? (
          <p style={{ color: 'green' }} className={styles.reservationWarning}>
            Sorry, we do not have free tables
          </p>
        ) : error ? (
          <p className={styles.reservationWarning}>{error.message}</p>
        ) : null
      ) : (
        <Spinner />
      )}
    </div>
  )
}

export default ReservationTable

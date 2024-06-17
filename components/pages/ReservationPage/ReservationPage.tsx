'use client'
import React, { useState } from 'react'
import styles from './ReservationPage.module.scss'
import ReservationTable from './elements/ReservationTable/ReservationTable'
import ReservationSettings from './elements/ReservationSettings/ReservationSettings'
import { reservationTypeDate, resevationsInfo } from '@/types/reservation'
import { getReservations } from '@/app/api/reservation'

const ReservationPage = () => {
  const [freeTables, setFreeTables] = useState<resevationsInfo[]>([])
  const [reservationDate, setReservationDate] =
    useState<reservationTypeDate | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('')

  const getTables = async (date: reservationTypeDate, count: number) => {
    setError('')
    try {
      setLoading(true)
      const tables = await getReservations({
        countOfGuests: count,
        reservationDate: date,
      })
      if (tables.length === 0) {
        setError(
          'It seems that all tables with these parameters are already booked'
        )
      }
      setFreeTables(tables)
      setReservationDate(date)
      setLoading(false)
    } catch (err) {
      setError('Sorry, try it later')
    }
  }

  return (
    <section className={styles.reservationPage} about="reservation page">
      <div className={styles.formBg}>
        <ReservationSettings getTables={getTables} />
        <ReservationTable
          error={error}
          loading={loading}
          freeTables={freeTables}
          date={reservationDate}
        />
      </div>
    </section>
  )
}

export default ReservationPage

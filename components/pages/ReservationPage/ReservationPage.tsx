'use client'
import React, { useState } from 'react'
import styles from './ReservationPage.module.scss'
import ReservationTable from './elements/ReservationTable/ReservationTable'
import ReservationSettings from './elements/ReservationSettings/ReservationSettings'
import { fetchTablesInfo } from '@/types/reservation'
import { getReservations } from '@/app/api/reservation'
import { useQuery } from '@tanstack/react-query'

const ReservationPage = () => {
  const [queryKey, setQueryKey] = useState(0)
  const [fetchData, setFetchData] = useState<fetchTablesInfo>()

  const getTables = ({ count, date }: fetchTablesInfo) => {
    setFetchData({ count, date })
    setQueryKey((prevKey) => prevKey + 1)
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ['reservationList', queryKey],
    queryFn: async () => {
      if (fetchData) {
        return await getReservations({
          countOfGuests: fetchData.count,
          reservationDate: fetchData.date,
        })
      }
    },
    enabled: !!fetchData,
  })

  return (
    <section className={styles.reservationPage} about="reservation page">
      <div className={styles.formBg}>
        <ReservationSettings getTables={getTables} />
        {data && fetchData && (
          <ReservationTable
            error={error}
            loading={isLoading}
            freeTables={data}
            date={fetchData?.date}
          />
        )}
      </div>
    </section>
  )
}

export default ReservationPage

'use client'
import React, { useState } from 'react'
import styles from './ReservationRow.module.scss'
import {
  ICreateReservation,
  IGetReservationById,
  IReservationRow,
} from '@/types/reservation'
import { makeReservation } from '@/app/api/reservation'
import { toast } from 'react-toastify'
import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'

const ReservationRow = ({
  id,
  countOfGuests,
  date,
  freeHours,
}: IReservationRow) => {
  const [selectedTime, setSelectedTime] = useState<number>()
  const [hourCount, setHourCount] = useState<number>(1)
  const [error, setError] = useState('')

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
      mutation.mutate(reservation)
    } else {
      selectedTime ? null : setError('Select time')
    }
  }
  const queryClient = useQueryClient()
  const mutation: UseMutationResult<
    IGetReservationById | false,
    Error,
    ICreateReservation
  > = useMutation({
    mutationFn: async (reservation: ICreateReservation) =>
      await makeReservation(reservation),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userReservations'] })
      toast.success('Reservation was success', { position: 'bottom-right' })
    },
    onError: () => {
      setError('Sorry there was an error, try again later')
    },
  })

  return (
    <div className={styles.reservation}>
      <div className={styles.reservation__info}>
        <p>Table № {id}</p>
        <p>Number of guests - {countOfGuests}</p>
      </div>
      <div className={styles.timeContainer}>
        {freeHours.map((item) => (
          <button
            key={item}
            onClick={() => setSelectedTime(item)}
            className={styles.timeElement}
            style={{
              backgroundColor: `${selectedTime === item ? '#E1B168' : ''}`,
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <div className={styles.reservationTimeCount}>
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
      <p className={styles.error}>{error}</p>
    </div>
  )
}

export default ReservationRow

import {
  ICreateReservation,
  IGetReservation,
  resevationsInfo,
} from '@/types/reservation'
import api from '../../app/axiosInstance'

export const getReservations = async ({
  countOfGuests,
  reservationDate,
}: IGetReservation): Promise<resevationsInfo[]> => {
  const { day, month, year } = reservationDate
  try {
    const { data } = await api.get(
      `/reservation?count=${countOfGuests}&day=${day}&month=${month}&year=${year}`
    )
    return data
  } catch (err) {
    return []
  }
}

export const makeReservation = async ({
  bookHour,
  day,
  hourCount,
  month,
  tableId,
  year,
}: ICreateReservation) => {
  try {
    const token = localStorage.getItem('token')
    console.log(token)
    const { data } = await api.post(
      `/reservation/create`,
      {
        bookHour,
        day,
        hourCount,
        month,
        tableId,
        year,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    console.log(data)
  } catch (err) {
    return []
  }
}

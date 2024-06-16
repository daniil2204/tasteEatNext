import { IGetReservation, IReservationRow } from '@/types/reservation'
import api from '../../app/axiosInstance'

export const getReservations = async ({
  countOfQuests,
  reservationDate,
}: IGetReservation): Promise<IReservationRow[]> => {
  const { day, month, year } = reservationDate
  try {
    const { data } = await api.get(
      `/reservation?count=${countOfQuests}&day=${day}&month=${month}&year=${year}`
    )
    return data
  } catch (err) {
    return []
  }
}

export const makeReservation = async () => {
  try {
    const { data } = await api.post(`/reservation/create}`, {})
    console.log(data)
  } catch (err) {
    return []
  }
}

export interface IReservationRow {
  id: number
  countOfQuests: number
  date: reservationTypeDate | null
}

export interface IGetReservation {
  countOfQuests: number
  reservationDate: reservationTypeDate
}

export type reservationTypeDate = {
  year: number
  day: number
  month: number
}

export interface IReservatioTable {
  freeTables: IReservationRow[]
  loading: boolean
  error: string
  date: reservationTypeDate | null
}

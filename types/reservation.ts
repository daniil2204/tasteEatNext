export interface IReservationRow {
  id: number
  countOfGuests: number
  date: reservationTypeDate | null
  freeHours: number[]
}

export type resevationsInfo = {
  table: IReservationRow
  freeHours: number[]
}

export interface IGetReservation {
  countOfGuests: number
  reservationDate: reservationTypeDate
}

export type reservationTypeDate = {
  year: number
  day: number
  month: number
}

export interface IReservatioTable {
  freeTables: resevationsInfo[]
  loading: boolean
  error: Error | null
  date: reservationTypeDate | null
}

export interface ICreateReservation {
  tableId: number
  bookHour: number
  hourCount: number
  day: number
  month: number
  year: number
}

export interface IGetReservationById {
  id: number
  tableId: number
  bookHour: number
  hourCount: number
  userId: number
  day: number
  month: number
  year: number
}

export type fetchTablesInfo = {
  date: reservationTypeDate
  count: number
}

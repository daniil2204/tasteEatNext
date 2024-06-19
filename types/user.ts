import { IGetReservationById } from './reservation'

export interface UserInterface {
  name: string
  email: string
  id: number
  phone: string
  bucket?: Bucket[]
  token?: string
  reservation: IGetReservationById[]
}

export interface Bucket {
  id: number
  userId: number
  dishId: number
  count: number
  price: number
}

export type ContextType = {
  user: UserInterface | null
  setUser: (user: UserInterface) => void
}

export type UserKeys = keyof UserInterface

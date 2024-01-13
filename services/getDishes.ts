import api from '../app/axiosInstance'
import { DishInterface } from '@/types/dishCard'

export async function getDishes(offset: number): Promise<DishInterface[]> {
  console.log(offset)
  const { data } = await api.get(`/dish?offset=${offset}`)
  return data
}

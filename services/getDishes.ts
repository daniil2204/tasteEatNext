import { getDishes } from '@/types/getDishes'
import api from '../app/axiosInstance'
import { DishInterface } from '@/types/dishCard'

export async function getDishes({
  offset,
  discount,
  likes,
  type,
}: getDishes): Promise<DishInterface[]> {
  try {
    const { data } = await api.get(
      `/dish?${offset ? `offset=${offset}` : ''}${likes ? '&likes=true' : ''}${
        discount ? `&discount=true` : ''
      }${type ? `&type=${type}` : ''}`
    )
    return data
  } catch (err) {
    return []
  }
}

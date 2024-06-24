import api from '../../app/axiosInstance'
import { addDishToBucketType } from '@/types/bucket'

export const addDishToBucket = async ({
  count,
  dishId,
}: addDishToBucketType) => {
  try {
    const token = localStorage.getItem('token')
    const { status } = await api.post(
      '/bucket/add',
      {
        dishId,
        count,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    return status
  } catch (err) {
    throw new Error('Try it later')
  }
}

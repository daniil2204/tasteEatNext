import api from '../../app/axiosInstance'
import { addDishToBucketType, IUserBucketItem } from '@/types/bucket'

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

export const getUserBucket = async (): Promise<IUserBucketItem[]> => {
  const token = localStorage.getItem('token')
  if (!token) {
    throw new Error('user not found')
  }
  try {
    const { data } = await api.get('/bucket', {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  } catch (err) {
    throw new Error('Try it later')
  }
}

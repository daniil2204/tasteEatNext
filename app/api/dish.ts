import { IGetDishes } from '@/types/getDishes'
import api from '../../app/axiosInstance'
import { IAddDishToBucket, DishInterface } from '@/types/dishCard'
import {
  typeOfFoodTitle,
  dishSliderInterface,
  dishesAndCategory,
} from '@/types/slider'
import { typeOfFoodListTitle } from '@/utils/additionalLists'

export async function getDishes({
  offset,
  discount,
  likes,
  type,
}: IGetDishes): Promise<DishInterface[]> {
  console.log(discount)
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

export async function getDishesByType(type: typeOfFoodTitle) {
  const { data } = await api.get(`/dish?type=${type.toUpperCase()}`)
  return data
}

export function getDishesAndType(): Promise<dishesAndCategory[]> {
  const promises: Promise<dishSliderInterface[]>[] = []
  const data: dishesAndCategory[] = []
  typeOfFoodListTitle.map((type) => {
    promises.push(getDishesByType(type))
  })
  return Promise.all(promises).then((res) => {
    for (let i = 0; i < res.length; i++) {
      data.push({
        dishes: res[i],
        type: typeOfFoodListTitle[i],
      })
    }
    return data
  })
}

export async function getDishById(
  dishId: number | null
): Promise<IAddDishToBucket> {
  if (!dishId) {
    throw new Error('Not founded')
  }
  try {
    const { data } = await api.get(`/dish/${dishId}`)
    return data
  } catch (err) {
    throw new Error('Not founded')
  }
}

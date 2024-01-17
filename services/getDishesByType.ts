import {
  typeOfFoodTitle,
  dishSliderInterface,
  dishesAndCategory,
} from '@/types/slider'
import { typeOfFoodListTitle } from '@/utils/additionalLists'
import api from '../app/axiosInstance'

export async function getDishesByType(type: typeOfFoodTitle) {
  const { data } = await api.get(`/dish/type/${type.toUpperCase()}`)
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

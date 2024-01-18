export type sliderType = {
  type: typeOfFoodTitle
  dishes: dishSliderInterface[]
}

export type typeOfFoodTitle = 'Dinner' | 'Breakfast' | 'Drink' | 'Dessert'

export interface dishSliderInterface {
  id: number
  description: string
  image: string
  price: number
  title: string
}

export type dishesAndCategory = {
  type: typeOfFoodTitle
  dishes: dishSliderInterface[]
}

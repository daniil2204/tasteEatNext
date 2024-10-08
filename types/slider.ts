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
  discount: number
}

export type dishesAndCategory = {
  type: typeOfFoodTitle
  dishes: dishSliderInterface[]
}

export interface IArrow {
  className?: string
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

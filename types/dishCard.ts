type images = {
  url: string
}

export interface DishInterface {
  id: number
  title: string
  images?: images[]
  image: string
  price: number
  description: string
  discount: number
}

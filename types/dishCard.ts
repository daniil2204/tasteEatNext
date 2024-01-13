type images = {
  url: string
}

export interface DishInterface {
  id: number
  title: string
  images: Array<images>
  price: number
  description: string
}

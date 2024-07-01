export type addDishToBucketType = {
  count: number
  dishId: number
}

export interface IUserBucketItem {
  id: number
  userId: number
  dishId: number
  count: number
  price: number
  title: string
  image: string
  discount: number
}

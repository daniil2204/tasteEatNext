import { DishInterface } from './dishCard'

export interface whatWeOfferBannerInterface {
  src: string
  alt: string
  title: string
}

export interface bannerInterface {
  bgSrc: '/assets/img/BlueBgDiscount.svg' | '/assets/img/GrayBgDiscount.svg'
  cloud: '/assets/img/blackCloud.svg' | '/assets/img/whiteCloud.svg'
  textColor: 'white' | 'black'
}

export interface discountBannerInterface {
  bannerStyles: bannerInterface
  dish: DishInterface
}

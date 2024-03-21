import { briefInfoInterface } from '@/types/about'
import { navListType } from '@/types/header'
import { typeOfFoodTitle } from '@/types/slider'
import { InputValueTypeInterface } from '@/types/auth'

export const navList: navListType[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About Us',
    href: '/about',
  },
  {
    title: 'Our Menu',
    href: '/menu',
  },
  {
    title: 'Offer',
    href: '/offer',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Reservation',
    href: '/reservation',
  },
  {
    title: 'Contact Us',
    href: '/contact',
  },
]

export const logos = [
  {
    src: '/assets/img/icons/instagram.svg',
    alt: 'instagram logo',
    href: 'https://www.instagram.com/',
  },
  {
    src: '/assets/img/icons/facebook.svg',
    alt: 'facebook logo',
    href: 'https://www.instagram.com/',
  },
  {
    src: '/assets/img/icons/twitter.svg',
    alt: 'twitter logo',
    href: 'https://www.instagram.com/',
  },
  {
    src: '/assets/img/icons/P.svg',
    alt: 'P logo',
    href: 'https://www.instagram.com/',
  },
]

export const briefInfoArray: briefInfoInterface[] = [
  {
    alt: 'Location',
    src: '/assets/img/Location.svg',
    text: 'Riverside 25, San Diego, California',
    title: 'Locate Us',
  },
  {
    alt: 'Schedule',
    src: '/assets/img/Schedule.svg',
    text: 'Mon To Fri 9:00 AM - 9:00 PM',
    title: 'Open Hours',
  },
  {
    alt: 'Reservation',
    src: '/assets/img/Reservation.svg',
    text: 'restaurantate@gmail.com',
    title: 'Reservation',
  },
]

export const typeOfFoodListTitle: typeOfFoodTitle[] = [
  'Breakfast',
  'Dinner',
  'Drink',
  'Dessert',
]

export const whatWeOfferBanners = [
  {
    src: '/assets/img/Opened24.svg',
    alt: 'We Open 24/7',
    title: 'Opened 24/7',
  },
  {
    src: '/assets/img/SpecialMenu.svg',
    alt: 'Special Menus',
    title: 'Special Menus',
  },
  {
    src: '/assets/img/Delivery.svg',
    alt: 'Home Delivery',
    title: 'Home Delivery',
  },
]

export const inputsRegisterValue: InputValueTypeInterface[] = [
  {
    type: 'email',
    required: 'Email is required',
    placeholder: 'Email',
    minLength: 4,
    minLengthMsg: 'Enter more than 4 characters',
    maxLength: 25,
    maxLengthMsg: 'Enter less than 25 characters',
  },
  {
    type: 'name',
    required: 'Name is required',
    placeholder: 'Name',
    pattern: {
      value: /^[a-zA-Z]+$/,
      message: 'He;;p',
    },
    minLength: 4,
    minLengthMsg: 'Enter more than 5 characters',
    maxLength: 15,
    maxLengthMsg: 'Enter less than 15 characters',
  },
  {
    type: 'password',
    required: 'Password is required',
    placeholder: 'Password',
    minLength: 4,
    minLengthMsg: 'Enter more than 4 characters',
    maxLength: 15,
    maxLengthMsg: 'Enter less than 15 characters',
  },
  {
    type: 'phone',
    required: 'Phone is required',
    placeholder: 'Phone',
    minLength: 4,
    minLengthMsg: 'Enter more than 4 characters',
    maxLength: 15,
    maxLengthMsg: 'Enter less than 15 characters',
  },
]

export const inputsLoginValue: InputValueTypeInterface[] = [
  {
    type: 'email',
    required: 'Email is required',
    placeholder: 'Email',
    minLength: 4,
    minLengthMsg: 'Enter more than 4 characters',
    maxLength: 25,
    maxLengthMsg: 'Enter less than 25 characters',
  },
  {
    type: 'password',
    required: 'Password is required',
    placeholder: 'Password',
    minLength: 4,
    minLengthMsg: 'Enter more than 4 characters',
    maxLength: 15,
    maxLengthMsg: 'Enter less than 15 characters',
  },
]

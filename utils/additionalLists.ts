import { briefInfoInterface } from '@/types/about'
import { navListType } from '@/types/header'
import { typeOfFoodTitle } from '@/types/slider'

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

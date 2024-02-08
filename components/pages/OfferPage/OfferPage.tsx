import React from 'react'
import styles from './OfferPage.module.scss'
import OfferBanner from './elements/OfferBanner/OfferBanner'
import DiscountBanner from './elements/DiscountsBanner/DiscountBanner'
import { whatWeOfferBanners } from '@/utils/additionalLists'
import { getDishes } from '@/app/api/dish'
import { bannerInterface } from '@/types/offer'

const OfferPage = async () => {
  const dishes = await getDishes({ discount: true })
  const evenObj: bannerInterface = {
    bgSrc: '/assets/img/BlueBgDiscount.svg',
    cloud: '/assets/img/whiteCloud.svg',
    textColor: 'black',
  }
  const oddObj: bannerInterface = {
    bgSrc: '/assets/img/GrayBgDiscount.svg',
    cloud: '/assets/img/blackCloud.svg',
    textColor: 'white',
  }

  return (
    <section about="Offer Page">
      <div className={styles.whatWeOffer}>
        <div className={styles.textContainer}>
          <p className={styles.textContainer__header}>What we offer</p>
          <p className={styles.textContainer__title}>Our Great Services</p>
          <p className={styles.textContainer__description}>
            The atmosphere set the stage. It`s about more than just a dining
            room away from your home. food takes the spotlight as guests.
          </p>
        </div>
        <div className={styles.banners}>
          {whatWeOfferBanners.map((banner) => (
            <OfferBanner
              key={banner.title}
              title={banner.title}
              src={banner.src}
              alt={banner.alt}
            />
          ))}
        </div>
      </div>
      <div className={styles.offerDiscounts}>
        {dishes.map((dish, index) => (
          <DiscountBanner
            key={dish.id}
            bannerStyles={index % 2 === 0 ? evenObj : oddObj}
            dish={dish}
          />
        ))}
      </div>
    </section>
  )
}

export default OfferPage

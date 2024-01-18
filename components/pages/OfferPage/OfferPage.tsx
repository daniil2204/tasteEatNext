import React from 'react'
import styles from './OfferPage.module.scss'
import OfferBanner from './elements/OfferBanner/OfferBanner'
import DiscountBanner from './elements/DiscountsBanner/DiscountBanner'
import { whatWeOfferBanners } from '@/utils/additionalLists'

const OfferPage = () => {
  console.log('')
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
        {whatWeOfferBanners.map((banner) => (
          <OfferBanner
            key={banner.title}
            title={banner.title}
            src={banner.src}
            alt={banner.alt}
          />
        ))}
      </div>
      <div className={styles.offerDiscounts}>
        <DiscountBanner
          bgSrc="/assets/img/BlueBgDiscount.svg"
          cloud="/assets/img/whiteCloud.svg"
          textColor="black"
        />
        <DiscountBanner
          bgSrc="/assets/img/GrayBgDiscount.svg"
          cloud="/assets/img/blackCloud.svg"
          textColor="white"
        />
      </div>
    </section>
  )
}

export default OfferPage

import React from 'react'
import styles from './AboutPage.module.scss'
import Image from 'next/image'
import { briefInfoInterface } from '@/types/about'
import { briefInfoArray } from '@/utils/additionalLists'

const createBriefInfo = (briefInfo: briefInfoInterface[]) => {
  return (
    <>
      {briefInfo.map((info) => (
        <div className={styles.briefInfo} key={`${info.title} ${info.alt}`}>
          <div className={styles.briefInfo__imgContainer}>
            <Image src={info.src} alt={info.alt} fill />
          </div>
          <div className={styles.briefInfo__info}>
            <p
              className={`${styles.briefInfo__title} ${styles.briefInfo__text}`}
            >
              {info.title}
            </p>
            <p
              className={`${styles.briefInfo__subTitle} ${styles.briefInfo__text}`}
            >
              {info.text}
            </p>
          </div>
        </div>
      ))}
    </>
  )
}

const AboutPage = () => {
  return (
    <section about="About Page" className={styles.aboutPage}>
      <div className={styles.briefInfoContainer}>
        {createBriefInfo(briefInfoArray)}
      </div>
      <div className={styles.storyContainer}>
        <div className={styles.storyImgContainer}>
          <Image src={'/assets/img/mainHall.svg'} alt="Main hall" fill />
        </div>
        <div className={styles.storyTextContainer}>
          <p className={`${styles.briefInfo__title} ${styles.briefInfo__text}`}>
            The Delicious Story
          </p>
          <p
            className={`${styles.briefInfo__subTitle} ${styles.briefInfo__text}`}
          >
            The people, food and the prime locations make the perfect place for
            the friends & family to come together and have great time.
          </p>
          <div className={styles.storyMottos}>
            <div>
              <p
                className={`${styles.briefInfo__title} ${styles.briefInfo__text}`}
              >
                2018
              </p>
              <p
                className={`${styles.briefInfo__subTitle} ${styles.briefInfo__text}`}
              >
                Plan for this restaurant to deliver healthy food.
              </p>
            </div>
            <div>
              <p
                className={`${styles.briefInfo__title} ${styles.briefInfo__text}`}
              >
                2022
              </p>
              <p
                className={`${styles.briefInfo__subTitle} ${styles.briefInfo__text}`}
              >
                Happily in the fourth year by fulfill the motto.
              </p>
            </div>
          </div>
          <p className={styles.author}>JOSEFINE</p>
          <div className={styles.signaruteContainer}>
            <Image src={'/assets/img/signature.svg'} alt="Signarute" fill />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage

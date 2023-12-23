import React from 'react'
import styles from './AboutPage.module.scss'
import Image from 'next/image'
import { briefInfoInterface } from '@/types/about'
import { briefInfoArray } from '@/utils/additionalLists'

const createBriefInfo = (briefInfo: briefInfoInterface[]) => {
  console.log('hello')
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
  console.log('server')
  return (
    <section about="About Page" className={styles.aboutPage}>
      <div className={styles.briefInfoContainer}>
        {createBriefInfo(briefInfoArray)}
      </div>
    </section>
  )
}

export default AboutPage

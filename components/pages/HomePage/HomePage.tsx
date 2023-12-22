import React from 'react'
import styles from './HomePage.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const HomePage = () => {
  console.log('hello')
  return (
    <section about="Home page" className={styles.homePage}>
      <div className={styles.textContainer}>
        <h1 className={`${styles.mainText} ${styles.text}`}>
          Welcome to
          <br />
          Restaurant
        </h1>
        <p className={`${styles.subText} ${styles.text}`}>
          The people, food and the prime locations make the perfect place good
          friends & family to come together and have great time.
        </p>
        <Link href={'/'} className={styles.link}>
          <p className={styles.text}>View Menu</p>
        </Link>
      </div>
      <div className={styles.imgContainer}>
        <Image priority fill alt="veranda" src={'/assets/img/HomePage.svg'} />
      </div>
    </section>
  )
}

export default HomePage

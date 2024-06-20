import React from 'react'
import styles from './Blog.module.scss'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.imgContainer}>
        <Image src={'/assets/img/viewBg.svg'} fill alt="news img" />
        {/* <button className={styles.viewBtn}>View</button> */}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textHeader}>
          <p className={`${styles.text} ${styles.decoratedText}`}>Delicious</p>
          <p className={`${styles.text} ${styles.decoratedText}`}>
            March 19, 2022
          </p>
        </div>
        <p className={`${styles.title} ${styles.text}`}>
          The Legend of US Cuisine: The Story of Hungry People
        </p>
        <p className={`${styles.underTitle} ${styles.text}`}>
          Capitalize on low-hanging fruit to identify a ballpark value added
          matrix economically and the creative activity to beta test override
          the food quality.
        </p>
      </div>
    </div>
  )
}

export default Blog

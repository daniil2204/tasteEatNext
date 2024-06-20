import React from 'react'
import Blog from './elements/Blog/Blog'
import styles from './BlogPage.module.scss'

const BlogPage = () => {
  return (
    <section about="BlogPage" className={styles.blogPage}>
      <div className={styles.header}>
        <p className={`${styles.text} ${styles.pageTitle}`}>Blog</p>
        <p className={`${styles.text} ${styles.title}`}>
          Be First Who Read News
        </p>
        <p className={`${styles.text} ${styles.underTitle}`}>
          Explore the latest stories about our dishes, offers, <br /> events and
          future plans here.
        </p>
      </div>
      <div className={styles.blogs}>
        <Blog />
        <Blog />
      </div>
    </section>
  )
}

export default BlogPage

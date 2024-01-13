import React from 'react'
import styles from './MenuPage.module.scss'
import List from './elements/List/List'

const MenuPage = async () => {
  return (
    <section className={styles.menuPage}>
      <div>
        <p className={`${styles.text} ${styles.title}`}>Menu</p>
        <p className={`${styles.text} ${styles.subTitle}`}>
          There is a game between the waiters in restaurant to see who serves
          the food to
          <br />
          each table fastest. That led to attempting the Guinness Record.
        </p>
      </div>
      <List />
    </section>
  )
}

export default MenuPage

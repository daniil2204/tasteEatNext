import React from 'react'
import styles from './MenuPage.module.scss'
import List from './elements/List/List'
import MenuSlider from './elements/MenuSlider/MenuSlider'

const MenuPage = () => {
  return (
    <section about="Menu Page" className={styles.menuPage}>
      <div className={styles.menu}>
        <p className={`${styles.text} ${styles.title}`}>Menu</p>
        <MenuSlider />
      </div>
      <div className={styles.popular}>
        <p className={`${styles.text} ${styles.title}`}>Popular Dishes</p>
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

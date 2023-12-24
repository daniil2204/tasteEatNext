import React from 'react'
import styles from './MenuPage.module.scss'
import Image from 'next/image'

const MenuPage = () => {
  const createDish = (dishes: Array<number>) => {
    console.log('')
    return (
      <div className={styles.menuGrid}>
        {dishes.map((dish) => (
          <div key={dish} className={styles.dishContainer}>
            <div className={styles.dishImg}>
              <Image src={'assets/img/testDish.svg'} alt="test" fill />
            </div>
            <div className={styles.titleAndPrice}>
              <p className={`${styles.text} ${styles.dishTitle}`}>
                Chicken Manjoori
              </p>
              <p className={`${styles.text} ${styles.dishPrice}`}>$15</p>
            </div>
            <p className={styles.underline} />
            <p className={`${styles.text} ${styles.description}`}>
              Dish relished by all age groups as a starter dish at parties.
            </p>
          </div>
        ))}
      </div>
    )
  }
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
      {createDish([1, 2, 3, 4, 5, 6])}
    </section>
  )
}

export default MenuPage

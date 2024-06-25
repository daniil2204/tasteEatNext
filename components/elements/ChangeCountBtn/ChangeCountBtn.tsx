import React from 'react'
import styles from './ChangeCountBtn.module.scss'

const ChangeCountBtn = ({ func, text }: { func: () => void; text: string }) => {
  return (
    <button className={styles.countBtn} onClick={func}>
      {text}
    </button>
  )
}

export default ChangeCountBtn

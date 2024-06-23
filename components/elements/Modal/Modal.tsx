'use client'
import React from 'react'
import styles from './Modal.module.scss'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

const Modal = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams()
  const modal = searchParams.get('modal')
  const router = useRouter()

  const pathname = usePathname()
  if (!modal) {
    return
  }
  return (
    <>
      {modal && (
        <div className={styles.modal}>
          {children}
          <div
            onClick={() => router.push(pathname, { scroll: false })}
            className={styles.overlay}
          />
        </div>
      )}
    </>
  )
}

export default Modal

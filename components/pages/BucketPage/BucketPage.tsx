'use client'
import React from 'react'
import styles from './BucketPage.module.scss'
import DishCardBucket from './elements/DishCardBucket/DishCardBucket'

import { useRedirect } from '@/hooks/useRedirect'
import { useQuery } from '@tanstack/react-query'
import { getUserBucket } from '@/app/api/bucket'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import Spinner from '@/components/elements/Spinner/Spinner'

const BucketPage = () => {
  const { shouldLoadContent } = useRedirect('bucket')
  const router = useRouter()
  const { data, isLoading, isError } = useQuery({
    queryKey: ['userBucket'],
    queryFn: async () => await getUserBucket(),
  })
  if (isError) {
    toast.error('Sorry, try it later')
    router.push('/')
  }
  return (
    <>
      {shouldLoadContent && (
        <div className={styles.bucketPage}>
          <div className={styles.bucketContainer}>
            {isLoading && <Spinner />}
            {data &&
              data.map((item) => (
                <DishCardBucket key={item.id} bucketItem={item} />
              ))}
          </div>
        </div>
      )}
    </>
  )
}

export default BucketPage

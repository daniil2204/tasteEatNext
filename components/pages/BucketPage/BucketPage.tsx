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
import Link from 'next/link'

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
      {isLoading && <Spinner />}
      {shouldLoadContent && (
        <div className={styles.bucketPage}>
          {data && data.length > 0 ? (
            <div className={styles.bucketContainer}>
              {data.map((item) => (
                <DishCardBucket key={item.id} bucketItem={item} />
              ))}
            </div>
          ) : (
            <div style={{ height: 300, display: 'flex', alignItems: 'center' }}>
              <Link href={'/menu'} style={{ fontSize: 24 }}>
                Add Dish To Bucket
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default BucketPage

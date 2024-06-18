import ReservationUser from '@/components/pages/ReservationPage/elements/ReservationUser/ReservationUser'
import { GetServerSidePropsContext } from 'next/types'
import React from 'react'

const page = ({ params }: GetServerSidePropsContext) => {
  if (params) {
    return <ReservationUser id={params.id} />
  }
}

export default page

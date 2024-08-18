import ReservationUser from '@/components/pages/ReservationPage/elements/ReservationUser/ReservationUser'
import React from 'react'

const page = ({ params }: { params: { id: string } }) => {
  return <ReservationUser id={params.id} />
}

export default page

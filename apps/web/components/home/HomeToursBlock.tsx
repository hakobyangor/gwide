import { useGetHomeToursQuery } from 'apps/web/api/tour/tour.gql.gen'
import TourCardItem from 'apps/web/pages/tours/card-item'
import React from 'react'
import Loader from '../main/Loader'

function HomeToursBlock() {
  const [{ data, fetching }] = useGetHomeToursQuery({})
  return (
    <>
      {fetching && <Loader />}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {data?.getHomeTours.length > 0 &&
          data?.getHomeTours?.map((tour) => <TourCardItem tour={tour} key={tour.id} />)}
      </div>
    </>
  )
}

export default HomeToursBlock

/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Typography } from '@material-tailwind/react'
import { withApi } from 'apps/web/api/client-api'
import { useGetToursByCountryQuery } from 'apps/web/api/tour/tour.gql.gen'
import Loader from 'apps/web/components/main/loader'
import { useRouter } from 'next/router'
import React from 'react'
import TourCardItem from './card-item'

function ToursPage() {
  const router = useRouter()
  const { countryId } = router.query

  const [{ data, fetching }] = useGetToursByCountryQuery({
    variables: { countryId: Number(countryId) }
  })

  const toursData = data?.getToursByCountry
  return (
    <>
      <Typography variant="h1" className="mx-auto text-3xl text-center mb-3">
        Tours
      </Typography>

      <div className="pt-10 flex justify-center">
        {fetching && <Loader />}
        {toursData?.map((tour) => (
          <TourCardItem key={tour.id} tour={tour} />
        ))}
      </div>
    </>
  )
}

export default withApi(ToursPage)

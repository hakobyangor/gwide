/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { withApi } from 'apps/web/api/client-api'
import { useGetToursByCountryQuery } from 'apps/web/api/tour/tour.gql.gen'
import Loader from 'apps/web/components/main/loader'
import PageHeader from 'apps/web/components/main/page-header'
import { useRouter } from 'next/router'
import React from 'react'
import TourCardItem from '../card-item'

function ToursPage() {
  const router = useRouter()
  const { countryId } = router.query

  const [{ data, fetching }] = useGetToursByCountryQuery({
    variables: { countryId: Number(countryId) }
  })

  const toursData = data?.getToursByCountry
  return (
    <>
      {toursData ? (
        <PageHeader>{`Tours In ${toursData[0].tourCity[0].city.country.name}`} </PageHeader>
      ) : (
        ''
      )}

      <div className="grid lg:grid-cols-3 gap-6">
        {fetching && <Loader />}
        {toursData?.map((tour) => (
          <TourCardItem key={tour.id} tour={tour} />
        ))}
      </div>
    </>
  )
}

export default withApi(ToursPage)

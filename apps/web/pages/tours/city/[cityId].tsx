/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { withApi } from 'apps/web/api/client-api'
import { useGetCityByIdQuery } from 'apps/web/api/country/country.gql.gen'
import { useGetToursByCountryQuery, useGetToursQuery } from 'apps/web/api/tour/tour.gql.gen'
import Loader from 'apps/web/components/main/Loader'
import PageHeader from 'apps/web/components/main/PageHeader'
import { useRouter } from 'next/router'
import React from 'react'
import TourCardItem from '../card-item'

export async function getServerSideProps(context) {
  return {
    props: { cityId: context.query.cityId } // will be passed to the page component as props
  }
}

function ToursPage({ cityId }) {
  const [{ data, fetching }] = useGetToursQuery({
    variables: { getToursInput: { tourCity: [Number(cityId)] } }
  })

  const [{ data: cityData, fetching: cityFetching }] = useGetCityByIdQuery({
    variables: { cityId: Number(cityId) }
  })

  const toursData = data?.getTours
  return (
    <section className="mb-32 text-gray-800 container mx-auto max-w-7xl">
      {!fetching && !cityFetching && cityData ? (
        <PageHeader>{`Tours In ${cityData.getCityById.name}`} </PageHeader>
      ) : (
        ''
      )}

      {(fetching || cityFetching) && <Loader />}
      <div className="grid lg:grid-cols-3 gap-6">
        {toursData?.map((tour) => (
          <TourCardItem key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  )
}

export default withApi(ToursPage)

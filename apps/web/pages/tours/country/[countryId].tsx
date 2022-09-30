/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { withApi } from 'apps/web/api/client-api'
import { useGetToursByCountryQuery } from 'apps/web/api/tour/tour.gql.gen'
import Loader from 'apps/web/components/main/Loader'
import PageHeader from 'apps/web/components/main/PageHeader'
import { useRouter } from 'next/router'
import React from 'react'
import TourCardItem from '../card-item'

export async function getServerSideProps(context) {
  return {
    props: { countryId: context.query.countryId } // will be passed to the page component as props
  }
}

function ToursPage({ countryId }) {
  const [{ data, fetching }] = useGetToursByCountryQuery({
    variables: { countryId: Number(countryId) }
  })

  const toursData = data?.getToursByCountry
  return (
    <section className="mb-32 text-gray-800">
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
    </section>
  )
}

export default withApi(ToursPage)

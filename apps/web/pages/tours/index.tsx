/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { withApi } from 'apps/web/api/client-api'
import { useGetCountriesQuery } from 'apps/web/api/country/country.gql.gen'
import CardBgImage from 'apps/web/components/card/card-bg-image'
import Loader from 'apps/web/components/main/Loader'
import PageHeader from 'apps/web/components/main/PageHeader'
import Link from 'next/link'
import React from 'react'

function ToursMainPage() {
  const [{ data: getCountriesData, fetching }] = useGetCountriesQuery({})

  const countries = getCountriesData?.getCountries
  return (
    <>
      <section className="mb-32 text-gray-800">
        <PageHeader>Tours</PageHeader>
        <div className="grid lg:grid-cols-3 gap-6">
          {fetching && <Loader />}
          {countries?.map((country) => (
            <CardBgImage
              key={country.id}
              name={country.name}
              link={`/tours/country/${country.id}`}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default withApi(ToursMainPage)

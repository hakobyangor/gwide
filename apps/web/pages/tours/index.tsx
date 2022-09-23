/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Typography } from '@material-tailwind/react'
import { withApi } from 'apps/web/api/client-api'
import { useGetCountriesQuery } from 'apps/web/api/country/country.gql.gen'
import Loader from 'apps/web/components/main/loader'
import Link from 'next/link'
import React from 'react'

function ToursMainPage() {
  const [{ data, fetching }] = useGetCountriesQuery({})

  const countries = data?.getCountries
  console.log('🚀 ~ ToursMainPage ~ countries', countries)
  return (
    <>
      <Typography variant="h1" className="mx-auto text-3xl text-center mb-3">
        Tours
      </Typography>

      <div className="pt-10 flex justify-center flex-col text-center">
        {fetching && <Loader />}
        {countries?.map((country) => (
          <Typography variant="h5" key={country.id} className="underline hover:text-red-500">
            <Link key={country.id} href={`/tours/${country.id}`} passHref={true}>
              {country.name}
            </Link>
          </Typography>
        ))}
      </div>
    </>
  )
}

export default withApi(ToursMainPage)

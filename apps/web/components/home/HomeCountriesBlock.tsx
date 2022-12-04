import { useGetHomeCountriesQuery } from 'apps/web/api/country/country.gql.gen'
import React from 'react'
import CardBgImage from '../card/card-bg-image'
import Loader from '../main/Loader'

function HomeCountriesBlock() {
  const [{ data: getHomeCountriesData, fetching }] = useGetHomeCountriesQuery({})

  const countries = getHomeCountriesData?.getHomeCountries
  return (
    <>
      {fetching && <Loader />}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {countries?.map((country) => (
          <CardBgImage
            key={country.id}
            name={country.name}
            id={country.id}
            link={`/tours/country/${country.id}`}
          />
        ))}
      </div>
    </>
  )
}

export default HomeCountriesBlock

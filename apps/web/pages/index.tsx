/* eslint-disable @next/next/no-img-element */
import { withApi } from '../api/client-api'
import { useGetCountriesQuery } from '../api/country/country.gql.gen'
import Loader from '../components/main/loader'
import CardBgImage from '../components/card/card-bg-image'
import PageHeader from '../components/main/page-header'

export function Index() {
  const [{ data: getCountriesData, fetching }] = useGetCountriesQuery({})

  const countries = getCountriesData?.getCountries

  return (
    <>
      <section className="mb-32 text-gray-800">
        <PageHeader>Countries</PageHeader>
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

export default withApi(Index)

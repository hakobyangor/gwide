/* eslint-disable @next/next/no-img-element */
import { withApi } from '../api/client-api'
import { useGetCountriesQuery } from '../api/country/country.gql.gen'
import Loader from '../components/main/Loader'
import CardBgImage from '../components/card/card-bg-image'
import PageHeader from '../components/main/PageHeader'
import Head from 'next/head'

export function Index() {
  const [{ data: getCountriesData, fetching }] = useGetCountriesQuery({})

  const countries = getCountriesData?.getCountries

  return (
    <>
      <section className="mb-32 text-gray-800">
        <Head>
          <title>Home | Gwide</title>
        </Head>
        <PageHeader>Main</PageHeader>
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

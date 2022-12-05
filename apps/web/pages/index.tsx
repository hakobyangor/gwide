/* eslint-disable @next/next/no-img-element */
import { withApi } from '../api/client-api'
import Head from 'next/head'
import IncentiveList from '../components/home/incentive/IncentiveList'

import HomeSearchBlock from '../components/home/HomeSearchBlock'
import HomeCountriesBlock from '../components/home/HomeCountriesBlock'
import HomeBecomeAGuideBlock from '../components/home/HomeBecomeAGuideBlock'
import DividerWithTitle from '../components/main/DividerWithTitle'
import HomeToursBlock from '../components/home/HomeToursBlock'
import { useAuth } from '../src/context/auth.context'

export function Index() {
  const { user: authUser } = useAuth()
  const incentives = [
    {
      name: 'Free shipping',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
      description:
        "It's not actually free we just price it into the products. Someone's paying for it, and it's not us."
    },
    {
      name: '10-year warranty',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
      description:
        "If it breaks in the first 10 years we'll replace it. After that you're on your own though."
    },
    {
      name: 'Exchanges',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
      description:
        "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though."
    }
  ]
  return (
    <>
      <Head>
        <title>Home | Gwide</title>
      </Head>
      <HomeSearchBlock />
      <section className="mb-32 text-gray-800 container m-auto max-w-7xl">
        <DividerWithTitle title="Most Loved Activities" />
        <HomeToursBlock />
        <DividerWithTitle title="Top Visited Countries" />
        <HomeCountriesBlock />
        <IncentiveList incentives={incentives} />
        {!authUser && <HomeBecomeAGuideBlock />}
      </section>
    </>
  )
}

export default withApi(Index)

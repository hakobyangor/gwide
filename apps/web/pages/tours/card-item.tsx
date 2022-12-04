/* eslint-disable @next/next/no-img-element */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import Button from 'apps/web/components/main/Button'
import TourCardGuideBlock from 'apps/web/components/tour/TourCardGuideBlock'
import TourCardRatingBlock from 'apps/web/components/tour/TourCardRatingBlock'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function TourCardItem({ tour }) {
  const router = useRouter()
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white relative">
        <Link passHref href={`/tours/${tour.id}`}>
          <img
            className="rounded-t-lg hover:cursor-pointer"
            // Todo change img src
            //src={tour.image}
            src={`https://mdbootstrap.com/img/new/standard/city/${tour.id}.jpg`}
            alt=""
          />
        </Link>
        <div className="absolute top-3 left-3">
          <TourCardRatingBlock rating={tour.rating} />
        </div>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{tour.name}</h5>
          <p className="text-gray-700 text-base mb-4 max-h-15">{tour.description}</p>
          <TourCardGuideBlock tour={tour} />
          <Button
            onClick={() => {
              router.push(`/tours/${tour.id}`)
            }}
            type="secondary"
            className=" inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  transition duration-150 "
          >
            View More
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TourCardItem

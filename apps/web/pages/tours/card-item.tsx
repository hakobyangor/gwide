/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import Button from 'apps/web/components/main/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function TourCardItem({ tour }) {
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <Link passHref href={`/tours/${tour.id}`}>
          <img
            className="rounded-t-lg hover:cursor-pointer"
            src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
            alt=""
          />
        </Link>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{tour.name}</h5>
          <p className="text-gray-700 text-base mb-4">{tour.description}</p>

          <Button
            type="secondary"
            className=" inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  transition duration-150 "
          >
            <Link passHref href={`/tours/${tour.id}`}>
              View More
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TourCardItem

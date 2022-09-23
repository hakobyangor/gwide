import { Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'

function TourCardItem({ tour }) {
  return (
    <div className="inline-block m-2">
      <Card className="w-96">
        <CardHeader color="blue" className="relative h-56">
          <img src={tour.image ?? 'ass'} alt="img-blur-shadow" className="h-full w-full" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            {tour.name}
          </Typography>
          <Typography>{tour.description}</Typography>
          <Typography>{tour.rating} stars</Typography>
          <hr className="mt-2" />

          <div className="mt-2 flex justify-center flex-row items-center">
            <div className="mr-3 ">
              <Image
                width="32"
                height="32"
                src={tour.guide.image ?? 'no-image'}
                alt="img-blur-shadow"
                className="h-full w-full rounded-full center"
              />
            </div>
            <div className="center">
              <Typography>
                {tour.guide.firstName} {tour.guide.lastName}
              </Typography>
            </div>
          </div>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">
            {`${tour.currency.name} ${tour.price}`}
            {tour.type === 'GROUP' ? '/preson' : ''}
          </Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
            {tour.tourCity?.map((city) => `${city.city.name}, `)}
            {tour.tourCity[0].city.country.name}
          </Typography>
        </CardFooter>
      </Card>
    </div>
  )
}

export default TourCardItem

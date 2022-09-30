/* eslint-disable @next/next/no-img-element */
import React from 'react'

function TourCardGuideBlock({ tour }) {
  return (
    <div className="mb-6 flex items-center">
      <img
        src={tour.guide.image}
        className="rounded-full shadow-lg w-16 h-16"
        alt={`${tour.guide.firstName} ${tour.guide.lastName}`}
      />

      <h5 className="text-lg font-bold mb-1 ml-3">{`${tour.guide.firstName} ${tour.guide.lastName}`}</h5>
    </div>
  )
}

export default TourCardGuideBlock

import React from 'react'

function IncentiveItem({ incentive }) {
  return (
    <div key={incentive.name} className="text-center sm:flex sm:text-left lg:block lg:text-center">
      <div className="sm:flex-shrink-0">
        <div className="flow-root">
          <img className="w-16 h-16 mx-auto" src={incentive.imageSrc} alt="" />
        </div>
      </div>
      <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
        <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
        <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
      </div>
    </div>
  )
}

export default IncentiveItem

import React from 'react'
import IncentiveItem from './IncentiveItem'

function IncentiveList({ incentives }) {
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="bg-gray-50 rounded-2xl px-6 py-16 sm:p-16 mb-8">
        <div className="max-w-xl mx-auto lg:max-w-none">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">How it works?</h2>
          </div>
          <div className="mt-12 max-w-sm mx-auto grid grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-3">
            {incentives.map((incentive) => (
              <IncentiveItem incentive={incentive} key={incentive.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IncentiveList

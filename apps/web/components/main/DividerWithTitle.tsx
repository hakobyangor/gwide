import React from 'react'

function DividerWithTitle({ title }) {
  return (
    <div className="relative my-6 mx-auto max-w-3xl">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="text-2xl font-extrabold tracking-tight text-gray-900 bg-white px-6">
          {title}
        </span>
      </div>
    </div>
  )
}

export default DividerWithTitle

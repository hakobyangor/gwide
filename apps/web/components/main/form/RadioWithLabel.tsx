import React from 'react'

function RadioWithLabel(props) {
  return (
    <>
      <input
        id={props.id}
        name={props.name}
        type="radio"
        defaultChecked={props.defaultChecked}
        className="focus:ring-gw-primary-500 text-gw-primary-600 border-gray-300 accent-gw-primary-500"
      />
      <label htmlFor={props.id} className="ml-3 block text-sm font-medium text-gray-700">
        {props.label}
      </label>
    </>
  )
}

export default RadioWithLabel

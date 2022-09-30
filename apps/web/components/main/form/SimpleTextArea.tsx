import React from 'react'

function SimpleTextArea(props) {
  return (
    <>
      <label htmlFor="about" className="block text-sm font-medium text-gray-700">
        {props.label}
      </label>
      <div className="mt-1">
        <textarea
          id={props.id}
          name={props.name}
          rows={3}
          className="shadow-sm p-3 focus:ring-sky-500 focus:border-sky-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
          defaultValue={props.defaultValue}
        />
      </div>
    </>
  )
}

export default SimpleTextArea

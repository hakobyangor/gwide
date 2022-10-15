import React from 'react'

function TextInputWithLabel(props) {
  return (
    <>
      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
        {props.label}
      </label>
      <input
        type="text"
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        name={props.name}
        id={props.id ?? ''}
        className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm ${
          props.className ?? ''
        }`}
        ref={props.inputRef}
      />
    </>
  )
}

export default TextInputWithLabel

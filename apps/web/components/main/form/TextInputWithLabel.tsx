import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

function TextInputWithLabel(props) {
  let errorClass = ''
  if (props.error) {
    errorClass = 'text-gw-error-500 border-gw-error-500'
  }
  return (
    <div>
      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
        {props.label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type={props.type === 'password' ? 'password' : 'text'}
          defaultValue={props.defaultValue}
          onChange={props.onChange}
          onBlur={props.onBlur}
          name={props.name}
          id={props.id ?? ''}
          className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gw-primary-500 focus:border-gw-primary-500 sm:text-sm ${
            props.className ?? ''
          } ${errorClass}`}
          ref={props.inputRef}
        />
        {props.error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon className="h-5 w-5 text-gw-error-500" aria-hidden="true" />
          </div>
        )}
      </div>
      {props.error && (
        <p className="mt-2 text-sm text-gw-error-600" id="email-error">
          {props.error}
        </p>
      )}
    </div>
  )
}

export default TextInputWithLabel

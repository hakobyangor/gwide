import React from 'react'

function Button(props) {
  let buttonClass = ''
  buttonClass +=
    'px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 '

  if (props.type === 'secondary') {
    buttonClass =
      'px-2.5 py-1.5 border border-transparent text-xs font-medium rounded  shadow-sm text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 '
  }

  if (props.disabled === true) {
    buttonClass =
      'px-2.5 py-1.5 border border-transparent shadow-sm rounded font-medium text-white bg-gray-300 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 '
  }

  buttonClass += props.className

  return (
    <button
      type={props.type ?? 'button'}
      className={`${buttonClass}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}

export default Button

import React from 'react'

function Button(props) {
  let buttonClass = ''
  buttonClass +=
    'px-2.5 py-1.5 border border-transparent font-medium rounded shadow-sm text-white bg-gw-primary-600 hover:bg-gw-primary-700 '

  if (props.type === 'secondary') {
    buttonClass =
      'px-2.5 py-1.5 border border-transparent font-medium rounded  shadow-sm text-gw-primary-700 bg-gw-primary-100 hover:bg-primary-200 '
  }

  if (props.disabled === true) {
    buttonClass =
      'px-2.5 py-1.5 border border-transparent shadow-sm rounded font-medium text-white bg-gray-300 hover:bg-gray-300 '
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

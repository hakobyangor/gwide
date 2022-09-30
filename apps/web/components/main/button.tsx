import React from 'react'

function Button(props) {
  let buttonClass = ''
  buttonClass +=
    'inline-flex mr-2 items-center  px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'

  if (props.type === 'secondary') {
    buttonClass =
      'inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
  }

  buttonClass += props.className

  return (
    <button type="button" className={`${buttonClass}`} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button

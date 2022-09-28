import React from 'react'

function Button({ children, type, className }) {
  let btnClass =
    'inline-flex mr-2 items-center  px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'

  if (type === 'secondary') {
    btnClass =
      'inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
  }

  btnClass += className

  return (
    <button type="button" className={btnClass}>
      {children}
    </button>
  )
}

export default Button

import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <svg
        className="w-32 h-32 mb-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h6a2 2 0 002-2v-5a2 2 0 00-2-2h-6a2 2 0 00-2 2v5a2 2 0 002 2z"
        />
      </svg>
      <h2 className="text-2xl font-semibold text-gray-700">No Food in the Cart</h2>
      <p className="text-gray-500">Looks like you haven't added anything to your cart yet.</p>
      <Link to="/">
        {' '}
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
          Go Back to Menu
        </button>
      </Link>
    </div>
  )
}

export default EmptyCart

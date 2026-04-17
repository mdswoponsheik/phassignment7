import React from 'react'
import { Link } from 'react-router'

const Error = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-4">
      
      <div className="text-center max-w-lg">
        
        {/* Big 404 */}
        <h1 className="text-9xl font-extrabold drop-shadow-lg">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm md:text-base opacity-90">
          The page you are looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:scale-105 transition duration-300"
        >
          Go Back Home
        </Link>

      </div>
    </div>

    </div>
  )
}

export default Error

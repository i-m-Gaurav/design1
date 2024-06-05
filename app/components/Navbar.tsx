import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-transparent  border-b border-gray-800">
      <div className="flex h-16 items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
        <h1 className="text-white text-2xl">design1</h1>
        
        </div>
        <div className='flex justify-between gap-4'>
          <h1>pricing</h1>
          <h1>contact</h1>
          <h1>about us</h1>
          </div>
      </div>
    </div>
  )
}

export default Navbar

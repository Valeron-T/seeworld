import React from 'react'
import Navbar from '../components/Navbar'

function Destinations() {
  return (
    <div className='flex flex-col min-h-[100vh] bg-gray-700'>
      <div className={`sm:px-16 px-6 flex flex-col justify-center items-center z-30 w-full`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Navbar />
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className='text-center'>Destinations</h1>
      </div>

    </div>
  )
}

export default Destinations
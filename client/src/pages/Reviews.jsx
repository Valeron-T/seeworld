import React from 'react'
import Navbar from '../components/Navbar'

function Reviews() {
  return (
    <div className='min-h-[100vh] bg-gray-700'>
      <div className={`sm:px-16 px-6 flex flex-col justify-center items-center z-30 w-full`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Navbar />
        </div>
        <h1>Coming soon</h1>
      </div>

    </div>
  )
}

export default Reviews
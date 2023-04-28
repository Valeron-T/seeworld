import React from 'react'
import Navbar from '../components/Navbar'

function AboutUs() {
  return (
    <div className='min-h-[100vh] bg-gray-700'>
      <div className={`sm:px-16 px-6 absolute flex flex-col justify-center items-center z-30 w-full`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Navbar />
        </div>
        <h1 className='font-blacksword xl:p-16 xl:text-8xl sm:text-4xl text-2xl text-white p-4'>About Us</h1>
        <p className='text-white font-poppins xl:p-16 xl:text-4xl sm:text-2xl p-4 text-center'>
          Seeworld Destinations - founded in the year 2015 with a vision to provide quality travel solutions - all under one roof. Our leadership team brings along strategic knowledge and over 40 years of collective experience in travel planning and execution. Having worked with different areas of travel planning and execution -adds value to our customer service.
        </p>
        <p className='text-white font-poppins xl:p-16 xl:text-4xl sm:text-2xl p-4 text-center'>
          Over the years we have extended our services to various educational institutions, defence associations, Corporate companies, Family groups and individuals. We believe in meticulously planning every service and provide hassle free solutions to our clients. The recommendations we get from our existing clientele speaks volumes about the services rendered.
        </p>
      </div>

    </div>
  )
}

export default AboutUs
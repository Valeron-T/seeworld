import React from 'react'
import { RiFacebookCircleFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="flex sm:flex-row flex-col text-center p-16 justify-around gap-4 bg-gray-800 text-white">
      <div className="flex flex-col sm:items-start items-center sm:w-[50%] sm:pb-0 pb-8">
        <h1 className='xl:text-6xl ss:text-4xl text-2xl font-blacksword pb-4'>Seeworld Destinations</h1>
        <p className='font-worksans font-extralight sm:text-left pb-4'>Seeworld Destinations provides travel solutions all under one roof, with over 40 years of collective experience in travel planning and execution. They have worked with various educational institutions, defense associations, corporate companies, family groups, and individuals, providing hassle-free solutions. Customer recommendations speak highly of their services.</p>
        <div className='flex flex-row xl:text-4xl sm:text-3xl text-2xl'>
          <Link to={"https://www.facebook.com/Seeworlddestination/"} target="_blank">
            <RiFacebookCircleFill className='mr-4' />
          </Link>
          <Link to={"https://www.instagram.com/seeworlddestinations/"} target="_blank">
            <RiInstagramFill className='mr-4' />
          </Link>
          <Link to={"https://twitter.com/seeworlddest"} target="_blank" >
            <RiTwitterFill className='mr-4' />
          </Link>
        </div>
      </div>
      <div className='flex flex-col'>
        <h1 className='xl:text-4xl ss:text-2xl text-xl font-worksans font-semibold pb-4'>Contact Us</h1>
        <div className="flex sm:flex-row flex-col gap-8 pb-8">
          <div className="flex flex-col sm:items-center w-full">

            <h2 className='font-worksans font-semibold pb-4 text-center'>Mumbai</h2>
            <p className='font-worksans font-extralight'>Shop No 2, Harjas CHS</p>
            <p className='font-worksans font-extralight'>Divine Home Colony</p>
            <p className='font-worksans font-extralight'>Near Mary Immaculate</p>
            <p className='font-worksans font-extralight'>Girls High School</p>
            <p className='font-worksans font-extralight'>Borivali West, Mumbai 400103</p>
            <a href='https://maps.app.goo.gl/sBYWccDjuc3bVreq5' className='underline'>Google Maps</a>
          </div>
          <div className="flex flex-col sm:items-center w-full">
            <h2 className='font-worksans font-semibold pb-4 text-center'>Goa</h2>
            <p className='font-worksans font-extralight'>B-17 Ground Floor Anant Dhara Bldg</p>
            <p className='font-worksans font-extralight'>Near Raymond Apartment</p>
            <p className='font-worksans font-extralight'>Opp. New Bata Showroom</p>
            <p className='font-worksans font-extralight'>Pajifond, Madgaon, Goa 403601</p>
            <a href='https://maps.app.goo.gl/ccUbVemhVLyJT91q9' className='underline'>Google Maps</a>
          </div>

        </div>
        <p className='font-worksans font-semibold  pb-4'>+91 99204 33245 /  +91 73041 27674</p>
        <p className='font-worksans font-semibold  pb-4'>seeworlddestinations.com</p>

      </div>
    </div>
  )
}

export default Footer
import React from 'react'
import { RiFacebookCircleFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri'

function Footer() {
  return (
    <div className="flex sm:flex-row flex-col text-center p-16 justify-between bg-gray-800 text-white">
        <div className="flex flex-col sm:items-start items-center sm:pb-0 pb-8">
            <h1 className='xl:text-8xl ss:text-4xl text-2xl font-blacksword pb-4'>Seeworld Destinations</h1>
            <p className='font-worksans font-extralight sm:text-left sm:w-[50%] pb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className='flex flex-row xl:text-4xl sm:text-3xl text-2xl'>
                <RiFacebookCircleFill className='mr-4'/>
                <RiInstagramFill className='mr-4'/>
                <RiTwitterFill className='mr-4'/>
            </div>
        </div>
        <div className="flex flex-col sm:items-start items-center">
            <h1 className='xl:text-4xl ss:text-2xl text-xl font-worksans font-semibold pb-4'>Contact Us</h1>
            <p className='font-worksans font-extralight sm:text-left sm:w-[50%] pb-4'>Shop No 2, Harjas CHS, Divine Home Colony, Near Mary Immaculate Girls High School, Borivali West, Mumbai 400103</p>
            <p className='font-worksans font-extralight sm:text-left sm:w-[50%] pb-4'>+91 99204 33245</p>
            <p className='font-worksans font-extralight sm:text-left sm:w-[50%] pb-4'>seeworlddestinations.com</p>
            
        </div>
    </div>
  )
}

export default Footer
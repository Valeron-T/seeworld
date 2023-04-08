import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import InfoCard from './components/InfoCard'
import { RxChevronDown } from 'react-icons/rx'
import { SlLocationPin } from "react-icons/sl"

const App = () => (
  <div className="">
    <div className='text-white w-full min-h-[100vh] overflow-hidden bg-cover bg-[url("./assets/images/bayhd.jpg")] bg-left flex flex-col pb-4'>
      <div className={`sm:px-16 px-6 flex justify-center items-center`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Navbar />
        </div>
      </div>
      <div className='flex flex-row flex-1 pb-4'>
        <div className="flex flex-col ss:px-16 px-4 justify-center items-start md:w-[45%] ss:w-[50%] w-[90%] text-left mr-4">
          <h2 className='xl:text-8xl ss:text-4xl text-2xl font-cedarville'>Upcoming Tours</h2>
          <h1 className='xl:text-[8rem] ss:text-[4rem] text-[2.75rem] font-worksans leading-[1] py-4'>Elafonissi Beach</h1>
          <p className="pb-4 xl:text-4xl">
            Crete's Elafonissi Beach's immense popularity comes from its pretty pinkish sand, warm lagoon-like waters, and very wild feel. Elafonissi Beach is actually an island, separated from the mainland by the shallow water and sandbars that only disappear under about three feet of water at high tide.
          </p>
          <div className="bg-white/20 shadow-xl rounded-xl py-4 backdrop-blur-md flex flex-row min-w-[100%]">
            <div className="flex justify-around w-[80%]">
              <InfoCard icon={SlLocationPin} label={"Location"} data={"Greece"}></InfoCard>
              <InfoCard icon={SlLocationPin} label={"Date"} data={"24 May, 2023"}></InfoCard>
            </div>
            <div className="flex flex-1">
              <button disabled="disabled"></button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <RxChevronDown className='animate-bounce drop-shadow-[0_0_5px_rgba(0,0,0,0.8)] shadow-black text-[32px]'/>
      </div>

      
      
    </div>

    <div className="h-[100vh]">
      <h1>hello</h1>
    </div>
  </div>
  
)


export default App

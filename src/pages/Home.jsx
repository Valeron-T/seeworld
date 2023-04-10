import React from 'react'
import Navbar from '../components/Navbar'
import InfoCard from '../components/InfoCard'
import Button from '../components/Button'
import { RxChevronDown } from 'react-icons/rx'
import { SlLocationPin } from "react-icons/sl"
import { BsCalendar4Week } from "react-icons/bs"
import { TfiSearch } from "react-icons/tfi"
import { RiCarLine } from "react-icons/ri"
import { TbRubberStamp, TbPlaneTilt, TbSpeedboat } from "react-icons/tb"
import { FaPassport } from "react-icons/fa"
import { MdOutlineCorporateFare, MdOutlineAirplaneTicket, MdOutlineTravelExplore } from "react-icons/md"
import 'animate.css';

function Home() {
    let services = [
        { title: 'Passport & Visa', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", icon: FaPassport },
        { title: 'Corporate M.I.C.E', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", icon: MdOutlineCorporateFare },
        { title: 'Holiday Packages', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", icon: MdOutlineTravelExplore },
        { title: 'Air Tickets', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", icon: MdOutlineAirplaneTicket },
        { title: 'Attestation', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", icon: TbRubberStamp },
        { title: 'Travel Insurance', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", icon: TbPlaneTilt },
        { title: 'Cruises', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", icon: TbSpeedboat },
        { title: 'Vehicles on Hire', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", icon: RiCarLine }
    ]

    return (
        <div>
            {/* Hero section  */}
            <div className='text-white w-full min-h-[100vh] overflow-hidden bg-teal-500 bg-cover bg-[url("/images/bayhd.webp")] bg-left flex flex-col pb-4'>
                <div className={`sm:px-16 px-6 flex justify-center items-center`}>
                    <div className={`xl:max-w-[1280px] w-full`}>
                        <Navbar />
                    </div>
                </div>
                <div className='flex flex-row flex-1 pb-4'>
                    <div className="flex flex-col ss:px-16 px-4 justify-center items-start md:w-[45%] ss:w-[50%] w-[90%] text-left mr-4">
                        <h2 className='animate__animated animate__fadeInLeft xl:text-8xl ss:text-4xl text-2xl font-cedarville'>Upcoming Tours</h2>
                        <h1 className='animate__animated animate__fadeInLeft xl:text-[8rem] ss:text-[4rem] text-[2.75rem] font-worksans font-semibold leading-[1] py-4'>Elafonissi Beach</h1>
                        <p className="animate__animated animate__fadeInLeft pb-4 xl:text-4xl">
                            Crete's Elafonissi Beach's immense popularity comes from its pretty pinkish sand, warm lagoon-like waters, and very wild feel. Elafonissi Beach is actually an island, separated from the mainland by the shallow water and sandbars that only disappear under about three feet of water at high tide.
                        </p>
                        <div className="animate__animated animate__fadeInUp bg-white/20 shadow-xl rounded-xl py-4 backdrop-blur-md flex flex-row min-w-[100%] ss:px-4">
                            <div className="flex justify-around w-[80%]">
                                <InfoCard icon={SlLocationPin} label={"Location"} data={"Greece"}></InfoCard>
                                <InfoCard icon={BsCalendar4Week} label={"Date"} data={"24 May, 2023"}></InfoCard>
                            </div>
                            <div className='flex flex-col justify-center'>
                                <Button style="" icon={TfiSearch} />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <RxChevronDown className='animate-bounce drop-shadow-[0_0_5px_rgba(0,0,0,0.8)] shadow-black text-[32px]' />
                </div>
            </div>

            {/* Destinations */}
            <div className="flex flex-col text-center">
                <h1 className='animate__animated animate__fadeInUp xl:text-8xl ss:text-3xl text-2xl font-cedarville pt-10 text-red-600 '>Our Top</h1>
                <h1 className='animate__animated animate__fadeInUp xl:text-[8rem] ss:text-[4rem] uppercase text-[2rem] font-worksans font-extralight pb-2'>DESTINATIONS</h1>
                {/* Large screen layout  */}
                <div className="hidden sm:flex flex-row scale-95 font-waterbrush text-white xl:text-6xl md:text-3xl sm:text-2xl text-sm">
                    <div className='inline-block relative w-[50%] p-2'>
                        <img src="./images/dubai-sq.jpg" className='transition ease-in-out delay-250 hover:brightness-[0.25] duration-600 brightness-50' alt="" />
                        <h1 className='absolute top-[45%] left-[42%]'>Dubai</h1>
                    </div>
                    <div className="flex h-[50%] w-[50%]">
                        <div className="grid grid-cols-2">
                            <div className="inline-block relative p-2">
                                <img src="./images/singapore-sq.jpg" className='transition ease-in-out delay-250 hover:brightness-[0.25] duration-600 brightness-50' alt="" />
                                <h1 className='absolute top-[45%] left-[38%]'>Singapore</h1>
                            </div>
                            <div className="inline-block relative p-2">
                                <img src="./images/japan-sq.jpg" className='transition ease-in-out delay-250 hover:brightness-[0.25] duration-600 brightness-50' alt="" />
                                <h1 className='absolute top-[45%] left-[42%]'>Japan</h1>
                            </div>
                            <div className="inline-block relative p-2">
                                <img src="./images/india-sq.jpg" className='transition ease-in-out delay-250 hover:brightness-[0.25] duration-600 brightness-50' alt="" />
                                <h1 className='absolute top-[45%] left-[42%]'>India</h1>
                            </div>
                            <div className="inline-block relative p-2">
                                <img src="./images/hungary-sq.jpg" className='transition ease-in-out delay-250 hover:brightness-[0.25] duration-600 brightness-50' alt="" />
                                <h1 className='absolute top-[45%] left-[38%]'>Hungary</h1>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Small screen layout */}
                <div className="grid grid-cols-2 sm:hidden font-waterbrush text-white sm:text-3xl text-xl pb-4 scale-95">
                    <div className="inline-block relative p-2">
                        <img src="./images/dubai-sq.jpg" className='transition ease-in-out delay-250 hover:brightness-[0.25] duration-600 brightness-50' alt="" />
                        <h1 className='absolute top-[45%] left-[38%]'>Dubai</h1>
                    </div>
                    <div className="inline-block relative p-2">
                        <img src="./images/singapore-sq.jpg" className='transition ease-in-out delay-250 hover:brightness-[0.25] duration-600 brightness-50' alt="" />
                        <h1 className='absolute top-[45%] left-[38%]'>Singapore</h1>
                    </div>
                    <div className="inline-block relative p-2">
                        <img src="./images/japan-sq.jpg" className='transition ease-in-out delay-250 hover:brightness-[0.25] duration-600 brightness-50' alt="" />
                        <h1 className='absolute top-[45%] left-[40%]'>Japan</h1>
                    </div>
                    <div className="inline-block relative p-2">
                        <img src="./images/hungary-sq.jpg" className='transition ease-in-out delay-250 hover:brightness-[0.25] duration-600 brightness-50' alt="" />
                        <h1 className='absolute top-[45%] left-[38%]'>Hungary</h1>
                    </div>
                </div>
                <div className='flex flex-row justify-center pb-4'>
                    <Button style="transition ease-in-out delay-150 hover:scale-110 duration-600 p-4 rounded-xl bg-gradient-to-br from-[#CD1A40] to-[#FF803C] text-white font-worksans font-extralight" text="View More" />
                </div>
            </div>

            {/* Services  */}
            <div className="flex flex-col text-center bg-gray-200">
                <h1 className='animate__animated animate__fadeInUp xl:text-8xl ss:text-3xl text-2xl font-cedarville pt-10 text-red-600 '>Our</h1>
                <h1 className='animate__animated animate__fadeInUp xl:text-[8rem] ss:text-[4rem] uppercase text-[2rem] font-worksans font-extralight pb-2'>Services</h1>
                <div className='grid sm:grid-cols-4 grid-cols-2 text-white pb-4'>
                    {services.map((data) =>
                        <div className='flex flex-col justify-center bg-gradient-to-r from-[#741ACD] to-[#670078] m-2'>
                            {data.icon ? <data.icon className='text-9xl pt-8 py-4 self-center' /> : ""}
                            <h2 className='font-worksans pt-2 font-semibold'>{data.title}</h2>
                            <p className='font-worksans pb-8 py-4 font-extralight w-[75%] self-center'>{data.desc}</p>
                        </div>
                    )}
                </div>
                <div className='flex flex-row justify-center pb-4'>
                    <Button style="transition ease-in-out delay-150 hover:scale-110 duration-600 p-4 rounded-xl bg-gradient-to-br from-[#CD1A40] to-[#FF803C] text-white font-worksans font-extralight" text="Learn More" />
                </div>
            </div>
        </div>
    )
}

export default Home
import React from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import InfoCard from '../components/InfoCard'
import Button from '../components/Button'
import { RiCarLine } from "react-icons/ri"
import { TbRubberStamp, TbPlaneTilt, TbSpeedboat } from "react-icons/tb"
import { FaPassport } from "react-icons/fa"
import { MdOutlineCorporateFare, MdOutlineAirplaneTicket, MdOutlineTravelExplore } from "react-icons/md"
import 'animate.css';
import TourCard from '../components/TourCard'
import FeedbackCard from '../components/FeedbackCard'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'

function Home() {
    let services = [
        { title: 'Passport & Visa', desc: "Hassle-free passport and visa application services for international travel", icon: "passport" },
        { title: 'Corporate M.I.C.E', desc: "Tailored corporate meetings, incentives, conferences, and events planning services.", icon: "corporate" },
        { title: 'Holiday Packages', desc: "Customized holiday packages to exotic destinations around the world.", icon: "holiday"},
        { title: 'Air Tickets', desc: "Convenient booking of domestic and international air tickets.", icon: "tickets" },
        { title: 'Attestation', desc: "Legalization of documents for foreign travel and immigration purposes.", icon: "attestation" },
        { title: 'Travel Insurance', desc: "Comprehensive travel insurance coverage for peace of mind during your trip.", icon: "insurance" },
        { title: 'Cruises', desc: "Memorable cruise experiences to stunning destinations worldwide.", icon: "cruise" },
        { title: 'Vehicles on Hire', desc: "Reliable and comfortable vehicles for hire, perfect for exploring your destination.", icon: "vehicle" }
    ]

    let slides = ['/images/bayhd.webp','/images/bayhd.webp','/images/bayhd.webp',]


    return (
        <div>
            {/* Hero section  */}
            <div className={`text-white w-full sm:min-h-[100vh] overflow-hidden bg-gray-200 bg-left flex flex-col`}>
                <div className='flex flex-col max-w-[100%] self-center'>
                    <Carousel children={slides} autoSlide={true} autoSlideInterval={3000}>
                        {slides.map((s) => (
                            <img src={s} className='aspect-auto'/>
                        ))}
                    </Carousel>
                </div>
                {/* <div className="flex justify-center">
                    <RxChevronDown className='animate-bounce drop-shadow-[0_0_5px_rgba(0,0,0,0.8)] shadow-black text-[32px]' />
                </div> */}
            </div>

            {/* Offers  */}
            <div className="flex flex-col text-center p-4">
                <h1 className='animate__animated animate__fadeInUp xl:text-6xl ss:text-3xl text-2xl font-blacksword pt-10 text-red-600 '>Our</h1>
                <h1 className='animate__animated animate__fadeInUp xl:text-[6rem] ss:text-[4rem] uppercase text-[2rem] font-worksans font-extralight pb-2'>Offers</h1>
                <div className='grid sm:grid-cols-3 grid-cols-1 pb-4'>
                    <TourCard img={"post1-sq"} onlyimg={true}/>
                    <TourCard img={"post2-sq"} onlyimg={true}/>
                    <TourCard img={"post3-sq"} onlyimg={true}/>
                </div>
            </div>

            {/* Services  */}
            <div className="flex flex-col text-center bg-gray-200 p-4">
                <h1 className='animate__animated animate__fadeInUp xl:text-6xl ss:text-3xl text-2xl font-blacksword pt-10 text-red-600 '>Our</h1>
                <h1 className='animate__animated animate__fadeInUp xl:text-[6rem] ss:text-[4rem] uppercase text-[2rem] font-worksans font-extralight pb-2'>Services</h1>
                <div className='grid sm:grid-cols-4 xs:grid-cols-2 grid-cols-1 text-white pb-4'>
                    {services.map((data) =>
                        <div className='flex flex-col justify-center bg-gradient-to-r from-[#741ACD] to-[#670078] m-2' key={data.title}>
                            {/* {data.icon ? <data.icon className='text-9xl pt-8 py-4 self-center' /> : ""} */}
                            <img src={`/images/${data.icon}.png`} alt="" srcset="" className='w-64 p-8 self-center bg-contain'/>
                            <h2 className='font-worksans pt-2 font-semibold xl:text-2xl'>{data.title}</h2>
                            <p className='font-worksans pb-8 py-4 font-extralight w-[75%] self-center'>{data.desc}</p>
                        </div>
                    )}
                </div>
                <div className='flex flex-row justify-center pb-4'>
                    <Button style="transition ease-in-out delay-150 hover:scale-110 duration-600 p-4 rounded-xl bg-gradient-to-br from-[#CD1A40] to-[#FF803C] text-white font-worksans font-extralight" text="Learn More" />
                </div>
            </div>

            {/* Tour Packages  */}
            <div className="flex flex-col text-center p-4">
                <h1 className='animate__animated animate__fadeInUp xl:text-6xl ss:text-3xl text-2xl font-blacksword pt-10 text-red-600 '>Popular</h1>
                <h1 className='animate__animated animate__fadeInUp xl:text-[6rem] ss:text-[4rem] uppercase text-[2rem] font-worksans font-extralight pb-2'>Tour Packages</h1>
                <div className='grid sm:grid-cols-3 grid-cols-1 pb-4'>
                    <TourCard place={"Tokyo, Japan"} days={5} price={"50,000"} img={"japan-sq"} />
                    <TourCard place={"Budapest, Hungary"} days={10} price={"75,000"} img={"hungary-sq"} />
                    <TourCard place={"Kerala, India"} days={7} price={"20,000"} img={"india-sq"} />
                </div>
                <div className='flex flex-row justify-center pb-4'>
                    <Button style="transition ease-in-out delay-150 hover:scale-110 duration-600 p-4 rounded-xl bg-gradient-to-br from-[#CD1A40] to-[#FF803C] text-white font-worksans font-extralight" text="Learn More" />
                </div>
            </div>

            {/* Reviews  */}
            <div className="flex flex-col text-center p-4 bg-gray-200">
                <h1 className='animate__animated animate__fadeInUp xl:text-6xl ss:text-3xl text-2xl font-blacksword pt-10 text-red-600 '>Our Top</h1>
                <h1 className='animate__animated animate__fadeInUp xl:text-[6rem] ss:text-[4rem] uppercase text-[2rem] font-worksans font-extralight pb-2'>Reviews</h1>
                <div className='grid sm:grid-cols-3 grid-cols-1 self-center p-4'>
                    <FeedbackCard name={"Benita D'Souza"} content={"Good services provided at a reasonable rate. We had been on a trip to Sri Lanka and we had an amazing time. Good hotels and amazing food . Big spacious car along-with a guide provided for all the 8 days."} img={"./images/dubai-sq.jpg"} title={"Google User"} />
                    <FeedbackCard name={"Benita D'Souza"} content={"Good services provided at a reasonable rate. We had been on a trip to Sri Lanka and we had an amazing time. Good hotels and amazing food . Big spacious car along-with a guide provided for all the 8 days."} img={"./images/dubai-sq.jpg"} title={"Google User"} />
                    <FeedbackCard name={"Benita D'Souza"} content={"Good services provided at a reasonable rate. We had been on a trip to Sri Lanka and we had an amazing time. Good hotels and amazing food . Big spacious car along-with a guide provided for all the 8 days."} img={"./images/dubai-sq.jpg"} title={"Google User"} />
                </div>
                <div className='flex flex-row justify-center pb-4'>
                    <Button style="transition ease-in-out delay-150 hover:scale-110 duration-600 p-4 rounded-xl bg-gradient-to-br from-[#CD1A40] to-[#FF803C] text-white font-worksans font-extralight" text="View All" />
                </div>
            </div>

            {/* Footer  */}
            <Footer/>
        </div>
    )
}

export default Home
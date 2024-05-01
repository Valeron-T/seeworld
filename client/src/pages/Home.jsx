import React from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import InfoCard from '../components/InfoCard'
import Button from '../components/Button'
import { RiCarLine } from "react-icons/ri"
import 'animate.css'
import TourCard from '../components/TourCard'
import FeedbackCard from '../components/FeedbackCard'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import { Link } from 'react-router-dom'
import Pdf from '../assets/holy_land.pdf';

function Home() {
    let services = [
        { title: 'Passport & Visa', desc: "Hassle-free passport and visa application services for international travel", icon: "passport" },
        { title: 'Corporate M.I.C.E', desc: "Tailored corporate meetings, incentives, conferences, and events planning services.", icon: "corporate" },
        { title: 'Holiday Packages', desc: "Customized holiday packages to exotic destinations around the world.", icon: "holiday" },
        { title: 'Air Tickets', desc: "Convenient booking of domestic and international air tickets.", icon: "tickets" },
        { title: 'Attestation', desc: "Legalization of documents for foreign travel and immigration purposes.", icon: "attestation" },
        { title: 'Travel Insurance', desc: "Comprehensive travel insurance coverage for peace of mind during your trip.", icon: "insurance" },
        { title: 'Cruises', desc: "Memorable cruise experiences to stunning destinations worldwide.", icon: "cruise" },
        { title: 'Vehicles on Hire', desc: "Reliable and comfortable vehicles for hire, perfect for exploring your destination.", icon: "vehicle" }
    ]

    let slides = ['/images/ne.png', '/images/banner1.jpg', '/images/banner2.jpg', '/images/banner3.jpg',]
    let slides2 = ['/images/ne-sq.png', '/images/post1-sq.jpg', '/images/post2-sq.jpg', '/images/post3-sq.jpg',]

    return (
        <div>
            {/* Hero section  */}
            <div className={`text-white w-full overflow-hidden bg-purple-950 bg-left flex flex-col`}>
                <div className='flex flex-col max-w-[100%] self-center max-sm:hidden'>
                    <Carousel children={slides} autoSlide={true} autoSlideInterval={5000}>
                        {slides.map((s) => (
                            <img src={s} style={{ 'minWidth': '-webkit-fill-available' }} key={s} className='' />
                        ))}
                    </Carousel>
                </div>
                <div className='flex flex-col max-w-[100%] self-center sm:hidden'>
                    <Carousel children={slides} autoSlide={true} autoSlideInterval={5000}>
                        {slides2.map((s) => (
                            <img src={s} style={{ 'minWidth': '-webkit-fill-available' }} key={s} className='' />
                        ))}
                    </Carousel>
                </div>

                {/* <div className="flex justify-center">
                    <RxChevronDown className='animate-bounce drop-shadow-[0_0_5px_rgba(0,0,0,0.8)] shadow-black text-[32px]' />
                </div> */}
            </div>

            {/* Offers  */}
            {/* <div className="flex flex-col text-center p-4">
                <h1 className='animate__animated animate__fadeInUp xl:text-6xl ss:text-3xl text-2xl font-blacksword pt-10 text-red-600 '>Our</h1>
                <h1 className='animate__animated animate__fadeInUp xl:text-[6rem] ss:text-[4rem] uppercase text-[2rem] font-worksans font-extralight pb-2'>Offers</h1>
                <div className='grid sm:grid-cols-3 grid-cols-1 pb-4'>
                    <TourCard img={"post1-sq"} onlyimg={true}/>
                    <TourCard img={"post2-sq"} onlyimg={true}/>
                    <TourCard img={"post3-sq"} onlyimg={true}/>
                </div>
            </div> */}

            {/* CTA */}
            <section class="bg-white dark:bg-gray-900 text-center">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div class="">
                        <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Upcoming Tours</h2>
                        {/* <p class="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                            Promo videos</p> */}
                        <div class="flex flex-col space-y-4 sm:flex-row sm:block sm:space-y-0 sm:space-x-4">
                            {/* <a href={Pdf} target="_blank" class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-map pr-2" viewBox="0 0 16 16" id="IconChangeColor"> <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z" id="mainIconPathAttribute"></path> </svg>
                                View itinerary
                            </a> */}
                            <a href="https://www.youtube.com/watch?v=AEci46OjMuk" target="_blank" class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                                Vietnam & Cambodia
                            </a>
                            <a href="https://www.youtube.com/watch?v=ZaPECXGzd8I" target="_blank" class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                                Dubai
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services  */}
            <div className="flex flex-col text-center bg-gray-200 p-4">
                <h1 className='animate__animated animate__fadeInUp xl:text-6xl ss:text-3xl text-2xl font-blacksword pt-10 text-red-600 '>Our</h1>
                <h1 className='animate__animated animate__fadeInUp xl:text-[6rem] ss:text-[4rem] uppercase text-[2rem] font-worksans font-extralight pb-2'>Services</h1>
                <div className='grid sm:grid-cols-4 grid-cols-2 text-white pb-4'>
                    {services.map((data) =>
                        <div className='flex flex-col justify-center rounded-3xl bg-gradient-to-r from-[#741ACD] to-[#670078] m-2' key={data.title}>
                            {/* {data.icon ? <data.icon className='text-9xl pt-8 py-4 self-center' /> : ""} */}
                            <img src={`/images/${data.icon}.png`} alt="" srcSet="" className='w-64 p-8 self-center bg-contain' />
                            <h2 className='font-worksans pt-2 font-semibold xl:text-2xl'>{data.title}</h2>
                            <p className='font-worksans pb-8 py-4 font-extralight w-[75%] self-center'>{data.desc}</p>
                        </div>
                    )}
                </div>
                <Link to={'/contact-us'}>
                    <div className='flex flex-row justify-center pb-4'>
                        <Button style="transition ease-in-out delay-150 hover:scale-110 duration-600 p-4 rounded-xl bg-gradient-to-br from-[#CD1A40] to-[#FF803C] text-white font-worksans font-extralight" text="Have a query ? Request a callback !" />
                    </div>
                </Link>
            </div>

            {/* Tour Packages  */}
            <div className="flex flex-col text-center p-4">
                <h1 className='animate__animated animate__fadeInUp xl:text-6xl ss:text-3xl text-2xl font-blacksword pt-10 text-red-600 '>Popular</h1>
                <h1 className='animate__animated animate__fadeInUp xl:text-[6rem] ss:text-[4rem] uppercase text-[2rem] font-worksans font-extralight pb-2'>Tour Packages</h1>
                <div className='grid sm:grid-cols-3 grid-cols-1 pb-4'>
                    <TourCard place={"Assam, India"} days={5} price={"20,000"} img={"assam"} />
                    <TourCard place={"Bihar, India"} days={6} price={"15,000"} img={"bihar"} />
                    <TourCard place={"Kerala, India"} days={7} price={"20,000"} img={"india-sq"} />
                </div>
                <div className='flex flex-row justify-center pb-4'>
                    <Link to={'/destinations'}>
                        <Button style="transition ease-in-out delay-150 hover:scale-110 duration-600 p-4 rounded-xl bg-gradient-to-br from-[#CD1A40] to-[#FF803C] text-white font-worksans font-extralight" text="View All" />
                    </Link>
                </div>
            </div>

            {/* Reviews  */}
            <div className="flex flex-col text-center p-4 bg-gray-200">
                <h1 className='animate__animated animate__fadeInUp xl:text-6xl ss:text-3xl text-2xl font-blacksword pt-10 text-red-600 '>Our Top</h1>
                <h1 className='animate__animated animate__fadeInUp xl:text-[6rem] ss:text-[4rem] uppercase text-[2rem] font-worksans font-extralight pb-2'>Reviews</h1>
                <div className='grid sm:grid-cols-3 grid-cols-1 self-center p-4'>
                    <FeedbackCard name={"Neil Dsouza"} content={"Shirley and team planned our honeymoon to Sri Lanka and Maldives and it all went smooth without any hassle. Would certainly recommended see world and will continue travelling with them"} img={"/images/reviews/unnamed.png"} title={"Google User"} />
                    <FeedbackCard name={"Dr Kanta Mukherjee"} content={"Tour sites, selection of hotels, quality of food, was excellent to the taste of every tourist. Enjoyed every bit of tour to North East of India. Well done Seaworld destination Tours and travel LLP !"} img={"/images/reviews/unnamed(2).png"} title={"Google User"} />
                    <FeedbackCard name={"Prerna Acharya"} content={"Amazing place. We book rooms in Goa. Good good hospitality at the hotels. Everything from the location of the hotel to services everything was just perfect. Thanks for Shirley for the recommendation totally love it."} img={"/images/reviews/unnamed(20).png"} title={"Google User"} />
                </div>
                <div className='flex flex-row justify-center pb-4'>
                    <Link to={"/reviews"} >
                        <Button style="transition ease-in-out delay-150 hover:scale-110 duration-600 p-4 rounded-xl bg-gradient-to-br from-[#CD1A40] to-[#FF803C] text-white font-worksans font-extralight" text="View All" />
                    </Link>
                </div>
            </div>

            {/* Footer  */}
            <Footer />
        </div>
    )
}

export default Home
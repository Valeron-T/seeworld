import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import 'animate.css';
import TitleAndDesc from '../components/TitleAndDesc';
import ExpandableTitleAndDesc from '../components/ExpandableTitleAndDesc';

function Destination() {
    const params = useParams();
    const [info, setinfo] = useState({})

    async function getDestinations() {
        const response = await fetch(`https://api.seeworlddestinations.com/destinations/${params.id}`);
        // const response = await fetch(`http://localhost:5000/destinations/${params.id}`);
        const jsonData = await response.json();
        console.log(jsonData.result)
        setinfo(jsonData.result)
    }

    useEffect(() => {
        getDestinations()
        // console.log(info.data[0].name)
    }, []);



    return (
        <div>
            <div style={{ '--image-url': `url("https://${info.img}")` }} className='flex flex-col min-h-screen bg-cover bg-top bg-[image:var(--image-url)] bg-gray-700'>

                <div className="backdrop-blur-xl w-[99vw] min-h-screen absolute brightness-50"></div>

                <div className={`sm:px-16 px-6 flex flex-col justify-center items-center z-30 w-full`}>
                    <div className={`xl:max-w-[1280px] w-full`}>
                        <Navbar />
                    </div>
                </div>

                <div className="flex sm:flex-row flex-col w-full h-full flex-1 justify-center z-30 items-center">
                    <div className="flex flex-col w-[50%] justify-center items-center">
                        <h1 className='animate__animated animate__fadeInUp mb-8 drop-shadow-2xl sm:text-6xl text-4xl font-extrabold uppercase text-white text-center sm:pl-4'>{info.name}</h1>
                        <h1 className='animate__animated animate__fadeInLeft mb-8 sm:text-2xl text-md text-white text-center font-worksans font-light sm:pl-4'>{info.duration}</h1>
                        <h1 className='animate__animated animate__fadeInLeft max-md:mb-8 sm:text-2xl text-md text-white text-center font-worksans font-light sm:pl-4'>{info.short_des}</h1>
                    </div>
                    <div className='w-[50%] m-8 flex justify-center items-center '>
                        <img src={`https://${info.img}`} className='h-auto sm:min-w-full rounded-2xl object-cover' alt="" />
                    </div>
                </div>


            </div>

            <div className='p-8 bg-gray-300'>
                <TitleAndDesc title={"About"} desc={info.description} />
                <TitleAndDesc title={"Highlights"} desc={info.highlights} />
                {info.meals && <TitleAndDesc title={"Meals"} desc={info.meals} />}
                {info.flights && <TitleAndDesc title={"Flights"} desc={info.flights} />}

                {info.included && <ExpandableTitleAndDesc title={"What's Included ?"} id={2} content={JSON.parse(info.included)} />}
                {info.itenary && <ExpandableTitleAndDesc title={"Day Wise Itinerary"} id={1} content={JSON.parse(info.itenary)} />}

            </div>


        </div>
    )
}

export default Destination
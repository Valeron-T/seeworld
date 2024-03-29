import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import 'animate.css';

function Destination() {
    const params = useParams();
    const [info, setinfo] = useState({})

    async function getDestinations() {
        const response = await fetch(`https://api.seeworlddestinations.com/destinations/${params.destination}`);
        const jsonData = await response.json();
        console.log(jsonData.data[0])
        setinfo(jsonData.data[0])
    }

    useEffect(() => {
        getDestinations()
        // console.log(info.data[0].name)
    }, []);

    return (
        <div style={{ '--image-url': `url("/images/${info.id}.jpg")` }} className='flex flex-col min-h-[100vh] bg-cover bg-top bg-[image:var(--image-url)] backdrop-blur-3xl'>
            <div className={`sm:px-16 px-6 flex flex-col justify-center items-center z-30 w-full`}>
                <div className={`xl:max-w-[1280px] w-full`}>
                    <Navbar />
                </div>
            </div>

            {info != {} ?

                <div className="flex flex-1 sm:flex-row flex-col justify-around sm:px-16 px-6">

                    <div className="sm:flex flex-col flex-1 self-center w-[50%] hidden">
                        <h1 className='animate__animated animate__fadeInUp drop-shadow-2xl sm:text-7xl text-4xl font-extrabold uppercase text-white sm:text-left text-center sm:pl-4'>{info.name}</h1>
                        <h1 className='animate__animated animate__fadeInLeft sm:text-xl text-md text-white sm:text-left text-center font-worksans font-extralight sm:pl-4'>{info.tagline}</h1>
                        <div className='flex flex-row text-white py-4 font-worksans sm:scale-100 scale-90 max-sm:self-center'>
                            <Button text={"Book Now"} />
                        </div>
                    </div>
                    <div className="sm:flex flex-col self-center w-[50%] hidden">
                        <div className='p-16 backdrop-blur-xl scale-50 rounded-[4rem] bg-gray-800/20 self-center'>
                            <img className='' src={`/images/${info.id}-logo.png`} alt="" srcset="" />
                        </div>
                    </div>

                    <div className="max-sm:flex flex-col self-center max-w-[80%] hidden">
                        <div className='flex flex-col p-8 backdrop-blur-xl scale-90 rounded-2xl bg-gray-800/20 self-center'>
                            <img className='max-w-[30vw] self-center pb-4' src={`/images/${info.id}-logo.png`} alt="" srcset="" />
                            <h1 className='animate__animated animate__fadeInUp drop-shadow-2xl sm:text-8xl text-4xl font-extrabold uppercase text-white sm:text-left text-center sm:pl-4'>{info.name}</h1>
                            <h1 className='animate__animated animate__fadeInLeft sm:text-xl text-md text-white sm:text-left text-center font-worksans font-extralight sm:pl-4'>{info.tagline}</h1>
                            <div className='flex flex-row text-white py-4 font-worksans sm:scale-100 scale-90 max-sm:self-center'>
                                <Button text={"Book Now"} />
                            </div>
                        </div>
                    </div>

                </div>

                : ""}


        </div>
    )
}

export default Destination
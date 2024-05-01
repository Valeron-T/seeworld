import React from 'react'
import { Link } from 'react-router-dom'

function DestinationCard({ title, duration, description, img, itemId }) {
    return (
        <div className="bg-neutral-800 h-full rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-lg hover:shadow-sky-400 transition-shadow">
            <div className="w-full bg-sky-300 rounded-2xl">
                <img src={`https://${img}`} className='h-40 rounded-2xl w-full object-cover' alt="" />
            </div>
            <div className="">
                <p className="font-extrabold uppercase min-h-[3rem]">{title}</p>
                <p className="pt-2">{duration}</p>
                <p className="py-2">{description.replace(/,\s*/g, ' • ')}</p>
            </div>
            <div className="flex-1 flex items-end flex-row self-end">
                <Link to={`/destinations/${itemId}`}>
                    <button className="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">See more</button>
                </Link>
            </div>
        </div>
    )
}

export default DestinationCard
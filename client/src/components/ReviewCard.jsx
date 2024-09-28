import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa';

function ReviewCard({ name, date, rating, comment, rid, img }) {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<FaStar key={i} />);
        } else {
            stars.push(<FaRegStar key={i} />);
        }
    }

    return (


        <div className={`flex flex-col w-full rounded-2xl ${rating>3?"bg-green-800":rating<3?"bg-green-800":"bg-green-800"} mt-4 text-white group`}>
            <div className="flex flex-row pb-0 p-4 justify-between">
                <div className="flex flex-row align-middle justify-center items-center">
                    <img src={`/images/reviews/${img}`} className='pr-4' />
                    <h2 className='text-2xl'>{name}</h2>
                </div>                
                <div className="flex flex-row mr-2">
                    {stars}
                </div>
            </div>
            {/* <p className='pt-1 pl-4 text-xs'>Reviewed {date.split("T")[0]}</p> */}
            <div className="p-4">
                <p>{comment}</p>
            </div>
        </div>

    )
}

export default ReviewCard
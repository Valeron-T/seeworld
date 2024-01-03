import React from 'react'

function TourCard({place, days, price, img, onlyimg}) {
  return (
    <div className='flex flex-col p-4'>
        <img src={`./images/${img ? img:""}.jpg`} className={`${onlyimg ? "rounded-xl shadow-2xl" : "rounded-t-xl" } object-cover aspect-square`} alt="" />
        <div className={`flex flex-row justify-between p-4 bg-[#fff0da] rounded-b-xl ${onlyimg ? "hidden":""} `}>
            <div className="flex flex-col text-start">
                <h1 className='font-worksans font-medium uppercase'>{place}</h1>
                <p className='font-worksans font-extralight'>{days} days trip</p>
            </div>
            <h1 className='self-center'>₹ {price}</h1>
        </div>
    </div>
  )
}

export default TourCard
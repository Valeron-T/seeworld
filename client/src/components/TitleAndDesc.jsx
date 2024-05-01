import React from 'react'

function TitleAndDesc({title, desc}) {
    return (
        <div className='bg-gray-700 text-white mb-6 rounded-2xl hover:shadow-xl'>
            <h1 className='p-8 flex-1 sm:text-3xl text-2xl font-semibold font-worksans' >{title}</h1>
            <div className='block animate__animated animate__fadeIn pt-0 p-8'>
                {Array.isArray(desc) ? desc.map((e, index) => {
                    return <p key={index} className='md:text-lg text-md pb-1'>&#x2022; {e}</p>
                }): <p className='md:text-lg text-md'>{desc}</p>}                
            </div>
        </div>
    )
}

export default TitleAndDesc
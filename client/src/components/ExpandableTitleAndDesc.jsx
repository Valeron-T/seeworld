import React from 'react'

function ExpandableTitleAndDesc({ title, id, content }) {

    function displaySibling(e) {
        var detailedinfo = document.getElementById(e.currentTarget.id).parentElement.classList
        if (detailedinfo.contains("isExpanded")) {
            detailedinfo.remove("isExpanded")
        } else {
            detailedinfo.add('isExpanded')
        }
    }

    return (
        <div className='group bg-gray-700 text-white mb-6 rounded-2xl hover:shadow-2xl'>
            <div onClick={displaySibling} className='flex flex-row cursor-pointer' id={id}>
                <h1 className='p-8 peer flex-1 sm:text-3xl text-md font-semibold font-worksans' >{title}</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="group-[.isExpanded]:hidden block w-6 h-6 mr-8 align-middle justify-center self-center">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="group-[.isExpanded]:block hidden w-6 h-6 mr-8 align-middle justify-center self-center">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
            </div>
            <div className='group-[.isExpanded]:block hidden animate__animated animate__fadeIn pt-0 p-8'>
                {Object.entries(content).map(([key, value], index) => {
                    return <div key={index}>
                        <h2 className='md:text-lg text-md py-4 font-bold'>{key}</h2>
                        {value.map((v, ind) => <li key={ind} className='mb-1'>{v}</li>)}
                    </div>
                })}
            </div>
        </div>
    )
}

export default ExpandableTitleAndDesc
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import 'animate.css'
import { Link } from 'react-router-dom'
import DestinationCard from '../components/DestinationCard'
import { TailSpin } from 'react-loader-spinner'

function Destinations() {
  const continent = ["Asia", "Americas", "Europe", "Australia"]
  const [filters, setfilters] = useState({
    location: [],
    continent: [],
    search: [],
  })
  const [results, setresults] = useState([])

  // Converts JSON into query which can be appended to a GET request
  function formatQueryString(filter) {
    let queryString = ""
    Object.keys(filter).map((subfilter) => {
      if (filter[subfilter] != "") {
        queryString = queryString.concat(`${subfilter}=${filter[subfilter]}&`)
      }
    })
    // console.log("queryString")
    // console.log(queryString)
    return queryString
  }

  function handleSubmit(e) {
    e.preventDefault()
    filters.search = []
    filters.search.push(e.target[0].value)
    getDestinations(filters)
  }

  async function getDestinations(filters) {
    let queryString = formatQueryString(filters)
    const response = await fetch(`https://api.seeworlddestinations.com/destinations?${queryString}`);
    // const response = await fetch(`http://localhost:5000/destinations?${queryString}`);
    var jsonData;

    if (!response.ok) {
      if (response.status === 500) {
        console.log('Internal Server Error (500), retrying...');
        const retryResponse = await fetch(`https://api.seeworlddestinations.com/destinations?${queryString}`);
        // const retryResponse = await fetch(`http://localhost:5000/destinations?${queryString}`);

        if (retryResponse.ok) {
          jsonData = await retryResponse.json();
        } 
      } 
    } else {
      jsonData = await response.json();
    }

    console.log(jsonData.result)
    setresults(jsonData.result)
  }

  useEffect(() => {
    getDestinations(filters)
  }, [filters])

  return (
    <div className='flex flex-col min-h-[100vh] bg-gray-700'>
      <div className={`sm:px-16 px-6 flex flex-col justify-center items-center z-30 w-full`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Navbar />
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className='animate__animated animate__fadeInUp pt-4 p-6 xl:text-8xl sm:text-4xl text-2xl font-extrabold uppercase text-white text-center sm:pl-4'>Destinations</h1>
        <div className="flex flex-row font-poppins w-[85%] self-center">
          <div className="sm:max-w-[30%] px-8 py-4 bg-slate-200 rounded-xl sm:block hidden h-min">
            <h1 className='font-semibold pb-2 text-xl'>Filters</h1>

            <h4 className='pt-2'>Location</h4>

            <div className="pl-8 pt-2">
              <input type="checkbox" name="International" id="international" onClick={() => {
                if (filters.location.includes("International")) {
                  filters.location.splice(filters.location.indexOf("International"), 1);
                } else {
                  filters.location.push(`${"International"}`)
                  console.log(filters)
                }
                getDestinations(filters)
              }} />
              <span> International</span>
            </div>

            <div className="pl-8 pt-2">
              <input type="checkbox" name="Domestic" id="domestic" onClick={() => {
                if (filters.location.includes("Domestic")) {
                  filters.location.splice(filters.location.indexOf("Domestic"), 1);
                } else {
                  filters.location.push(`${"Domestic"}`)
                  console.log(filters)
                }
                getDestinations(filters)
              }} />
              <span> Domestic</span>
            </div>
            <h4 className='pt-2'>Continent</h4>
            {continent.map((name) => (
              <div className="pl-8 pt-2">
                <input type="checkbox" name={name} id={name} onClick={() => {
                  if (filters.continent.includes(name)) {
                    filters.continent.splice(filters.continent.indexOf(name), 1);
                  } else {
                    filters.continent.push(`${name}`)
                    console.log(filters)
                  }
                  getDestinations(filters)
                }} />
                <span> {name}</span>
              </div>
            ))}

          </div>
          <div className='flex flex-1 sm:pl-4 flex-col'>
            {/* <form className='p-2 w-full' onSubmit={handleSubmit}>
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Destinations..." />
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
              </div>
            </form> */}

            <div className='p-2 pt-0 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 grid-flow-row'>

              {results.length > 0 ? results.map(item => {
                return <div className='p-2 pt-0'><DestinationCard title={item.name} itemId={item.id} key={item.id} duration={item.duration} img={item.img} description={item.short_des} /> </div>
              }) :
                <div className="flex md:col-span-4 sm:col-span-2 col-span-1 justify-center self-center">
                  <TailSpin
                    visible={true}
                    height="100"
                    width="100"
                    color="#4fa94d"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                  />
                </div>
              }


            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Destinations
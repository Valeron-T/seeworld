import React from 'react'
import Navbar from '../components/Navbar'
import ReviewCard from '../components/ReviewCard'
import allReviews from '../assets/reviews.json';
import { Link } from 'react-router-dom';

function Reviews() {

  return (
    <div className='min-h-[100vh] bg-gray-700'>
      <div className={`sm:px-16 px-6 flex flex-col justify-center items-center z-30 w-full`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Navbar />
        </div>
        <h1 className='text-white'>All our reviews are sourced from <Link to={"https://maps.app.goo.gl/DYeU6mUGuc7sVqX67"} target='_blank' className='text-blue-300 underline'>Google.</Link></h1>
        {allReviews['results'].map(item => (
          // <p className='text-slate-50'>{i.Name}</p>
          <ReviewCard name={item.Name} date={item.Time} rating={item.Stars} comment={item.Text} img={item.Image}/>
        ))}
        <div className='p-4'></div>
      </div>

    </div>
  )
}

export default Reviews
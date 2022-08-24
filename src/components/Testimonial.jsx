import React from 'react';
import { Review } from './common/Review';

export const Testimonial = () => {
  return (
    <>
    <div className='px-10 my-10 md:px-32 lg:px-44 flex flex-col md:flex-row md:mb-0 md:justify-between  md:items-center'>
        <h1 className='font-mono text-rose-800 text-3xl lg:text-3xl mb-4 '>Testimonials</h1>
        <p className='font-mono text-orange-300 text-lg mb-2 md:mb-0 lg:text-xl'>See what our students say</p>
        <button className='font-mono bg-orange-500 text-white w-28 h-10  rounded-lg'>View all</button>
    </div>
    <div className='w-100'>
       <Review />
    </div>
    </>
  )
}

import React from 'react';
import Pic from '../img/01.jpg'
import { DestinationCard } from './common/DestinationCard';


export const Destination = () => {
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white my-10 px-10 py-10 md:py-16 flex flex-col items-center justify-center  md:px-32 lg:px-44 '>
        <h1 className='font-bold text-lg mb-3 md:text-3xl lg:text-4xl md:mb-5'>The Best Study Destinations Across The Globe</h1>

        <span className='text-slate-200 mb-3 md:text-lg lg:text-xl md:mb-5'>Start Your Overseas Education Journey with the best education consultancy in Nepal - AECC Global!
            Explore more about the most preferred international study destinations by Nepalese students.
        </span>


        <div className='grid gap-10 md:grid-cols-3'>
            <DestinationCard 
            heading='Australia'
            description='Study in one of the world’s most relaxed country, and benefit from Australia’s incredible reputation for quality education and student satisfaction.'
            photo={Pic}
            />
            <DestinationCard 
            heading='New Zealand'
            description="xplore the beauty of New Zealand and discover a new cultural experience and exciting adventures amongst the world's most friendly people for quality education and student satisfaction."
            photo={Pic}
            />
            <DestinationCard 
            heading='Canada'
            description='Experience the wild landscape and beautiful natural environment of Canada and enjoy living in a tolerant and multicultural society that welcomes innovation.'
            photo={Pic}
            />

       

        </div>

    </div>
  )
}

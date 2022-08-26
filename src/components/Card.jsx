import React from 'react';
import {BsArrowRight} from 'react-icons/bs';

export const Card = ({title, desc, link}) => {
  return (
    <div className='border-2 border-slate-300 py-5 px-3 rounded-lg  md:px-8 md:my-10 hover:shadow-lg hover:transition-colors md:space-y-2 lg:space-y-5'>
        <h1 className='text-3xl font-lato uppercase font-bold'>{title}</h1>
        <p className='text-justify font-thin font-merriweather'>{desc}</p>
        <span className='font-bold font-open-sans flex items-center cursor-pointer hover:-translate-y-1 hover:text-slate-300 transition-transform '>
        Find Out More
      <BsArrowRight className='ml-3 text-xl ' />
        </span>
    </div>
  )
}

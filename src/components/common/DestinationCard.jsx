import React from 'react'

export const DestinationCard = ({photo, heading, description, link}) => {
  return (
<div className='pb-4  bg-slate-100 flex flex-col text-black space-y-3 drop-shadow-2xl justify-center rounded-xl'>
    <img src={photo} alt="pic" className='' />
    <h3 className='text-center font-bold font-open-sans text-xl md:text-2xl'>{heading}</h3>
    <p className=' text-center text-base lg:text-lg px-3 md:text-base font-merriweather'>{description}</p>
    <button className='bg-rose-300 font-merriweather px-4 py-3 text-white rounded mx-auto transition-colors hover:bg-rose-400 hover:scale-105 '>Learn More</button>
</div>

  )
}

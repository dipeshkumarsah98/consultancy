import React from 'react'
import { List } from './common/List'


export const Services = () => {
  const services = ['Educational Counselling', 'University Selection', 
  'Admission Assistance', 'Visa Documents Guidance', 'Preparation classes for ILETS/TOEFL/SAT/GRE/GMAT',
  'Course Selection', 'Scholarship Assistance', 'Pre-departure and post arrival Service', 'Accommodation Services'

]

  return (
    <div className='px-10 my-10 md:px-32 lg:px-44'>
        <h1 className='font-open-sans text-5xl my-5 md:text-7xl lg:8xl '>Our Services</h1>
        <span className='font-merriweather text-center text-base text-gray-500 md:my-5 md:text-xl lg:text-2xl'>We provide students with a wide spectrum of opportunities</span>
        <List 
        items={services}
        />
    </div>

  )
}

import React from 'react'
import Pic from '../img/about.jpg';
export const About = () => {
  return (
    <>
    <h1 className='font-open-sans text-center mt-10 text-5xl bg-gradient-to-r from-cyan-500 to-blue-500 py-7 md:py-10 text-white md:text-7xl'>About Us</h1>
    <div className='px-10 my-10 md:px-32 lg:px-44 flex flex-col-reverse md:flex-row gap-10 lg:items-center '>
      <div className='space-y-4'>

        <h3 className='font-merriweather text-xl md:text-xl lg:text-5xl'>Welcome to our Consultancy</h3>
        <p className='font-merriweather text-base lg:text-lg 2xl:text-2xl text-justify text-gray-600'>Established in 2001, Nepal Education Consultancy is one of the pioneers for abroad education counselling in Nepal. We are registered under Ministry of Education, Science & Technology and fulfill all of the technical and certification requirements along with attaining global certification of training which have possessed us with knowledge to lead the counselling industry. With over 18 years of experience we specialize in counselling of destinations like Australia, USA, United Kingdom, Canada, Netherland and India. And along with high visa success rate, we also are proud of our students who have been successful in their career through our counselling and guidance. That makes us possibly the best education consultancy in Nepal.

        Nepal Education Consultancy is also proud members of 2 highly esteemed education association of Nepal; Nepalese association of Australian Education representatives NAAER and International Education Representative Initiative of Nepal IERIN.
        </p>
      </div>
      <div className=''>
        <img src={Pic} alt='about' className='' />
      </div>
    </div>
    </>
  )
}

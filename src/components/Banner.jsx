import React from 'react'
import {Carousel} from 'flowbite-react';
import Img1 from '../img/01.jpg';
import Img2 from '../img/02.jpg';
import Img3 from '../img/03.jpg';

export const Banner = () => {
  return (
  <div className="h-[50vh] sm:h-64 md:h-screen xl:h-screen ">
  <Carousel
  indicators={false}
  >
    <div >
        <img src={Img1} alt="first" className='bg-cover bg-center ' />
        <div className='flex flex-col absolute bottom-0 top-0 lg:top-60 left-0 md:left-40  z-10 bg-black/60 text-white px-3 py-4 w-52 h-40 mx-auto my-auto rounded-lg  justify-center md:w-2/6 lg:w-4/12 lg:h-60 lg:px-5 z-10'>
            <h2 className='text-left md:text-xl lg:text-3xl font-lato font-bold'>Study in Australia</h2>
            <p className='text-xs md:text-base lg:text-lg font-merriweather'>Australia offers a diverse range of study options for international students, with more than 1,200 institutions and over 22,000 courses to choose from.</p>
        </div>
    </div>
    <div>
        <img src={Img2} alt="first" className='bg-cover bg-center' />
       
    </div>
    <div>
        <img src={Img3} alt="first" className='bg-cover bg-center' />
        
    </div>
  </Carousel>
</div>
  )
}

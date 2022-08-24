import React from 'react'

import Pic from '../../img/01.jpg';
import {BsFillChatLeftQuoteFill} from 'react-icons/bs';


export const CarouselItem = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-between px-10 my-10 space-y-4 md:space-x-4 md:px-32 lg:px-44 md:items-center'>

            <img src={Pic} alt='pic' className='bg-contain bg-center md:h-52 lg:h-72 xl:h-96' />

            <div className='space-y-2' > 
                <BsFillChatLeftQuoteFill className='text-3xl text-orange-500 md:5xl lg:text-5xl' />
                {/* comment */}
                <p className='lg:text-xl'>
                Counselors are very professional and provide accurate information. They help you in every step on the way, from applications to visa interview.NIEC is a great place to start if you have no idea about applying abroad.
                </p>
                {/* name */}
                <p className='font-bold text-lg'>Nagen Kumar Chaudhary</p>
                {/* university name */}
                <p>Cambridge University</p>
            </div>
    </div>
  )
}

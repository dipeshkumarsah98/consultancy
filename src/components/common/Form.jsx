import React from 'react'
import { Input } from './Input'
import { Map } from './Map'

export const Form = () => {
  return (
    <div className='px-10 my-10 md:px-32 lg:px-44  '>
        <h1 className='font-merriweather text-lg mb-1 md:text-2xl lg:text-3xl'>Interested in studying abroad with NEC?</h1>
        <p className='font-lato font-medium mb-6 md:text-xl lg:text-2xl'>Fill in your details and we’ll call you back!</p>
        <form action="" className='flex flex-col md:flex-row gap-6 items-center'>
          <div className='mx-10'>
          <Map />
          </div>
          <div>
            <Input lable={'Name'} type='text' name='name' />
            <Input lable={'Email'} type='email' name='email' />
            <Input lable={'Mobile Number'} type='number' name='number' />
            <button type="submit" className='bg-orange-400 text-white py-2 px-3 rounded-lg mt-5 font-lato font-bold'>Submit</button>
          </div>
        </form>
    </div>
  )
}

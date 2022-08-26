import React from 'react'

export const Input = ({lable, type, name}) => {
  return (
    <>
    <div className='my-3 flex flex-col'>
      <label htmlFor={name} className='mr-2 font-open-sans font-bold md:text-xl'>{lable}:</label>
      <input type={type ||"text"} name={name} placeholder={lable} className='rounded-md border-2 font-bold h-10 font-open-sans sm:w-80 md:w-96  border-solid border-gray-500'/>
    </div>

    </>
  )
}

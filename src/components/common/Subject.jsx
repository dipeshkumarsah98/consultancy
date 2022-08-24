import React from 'react'

export const Subject = ({pic, name}) => {
  return (
    <div className='drop-shadow-lg'>
        <img src={pic} alt="Applied Science" className='rounded' />
        <span className='mt-4 text-xl text-center'> {name}</span>
    </div>
  )
}

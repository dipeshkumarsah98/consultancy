import React from 'react'
import {FaHandPointRight} from 'react-icons/fa'



export const List = ({items}) => {
  return (
    <ul className='mx-1 md:space-y-5'>
        {items.map((item, index)=>(
            <li key={index} className='flex font-lato font-medium md:text-3xl'> <FaHandPointRight className='mr-3' />{item}</li>            
        ))
        
        }
    </ul>
  )
}

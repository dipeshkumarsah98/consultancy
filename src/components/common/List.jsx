import { motion } from 'framer-motion'
import React from 'react'
import {FaHandPointRight} from 'react-icons/fa'



export const List = ({items, parent}) => {
  return (
    <ul  className='mx-1 md:space-y-5'>
        {items.map((item, index)=>(
            <motion.li key={index} variants={parent} className='flex font-lato font-medium md:text-3xl'> <FaHandPointRight className='mr-3' />{item}</motion.li>            
        ))
        
        }
    </ul>
  )
}

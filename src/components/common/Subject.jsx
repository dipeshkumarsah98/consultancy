import { motion } from 'framer-motion'
import React from 'react'


export const Subject = ({pic, name, items}) => {
  return (
    <motion.div variants={items} className='drop-shadow-lg'>
        <img src={pic} alt="Applied Science" className='rounded' />
        <span className='mt-4 text-xl text-center font-lato font-medium'> {name}</span>
    </motion.div>
  )
}

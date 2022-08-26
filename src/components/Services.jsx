import { motion } from 'framer-motion'
import React from 'react'
import { List } from './common/List'




export const Services = () => {
  const services = ['Educational Counselling', 'University Selection', 
  'Admission Assistance', 'Visa Documents Guidance', 'Preparation classes for ILETS/TOEFL/SAT/GRE/GMAT',
  'Course Selection', 'Scholarship Assistance', 'Pre-departure and post arrival Service', 'Accommodation Services'

]
const container = {
  show: {
    transition:{
      delayChildren: 0.3,
      staggerChildren: 0.5
    }
  }
}
const item = {
  hidden: {opacity: 0, x: 80},
  show: {opacity: 1, x: 0, transition: {
    duration: 0.4,
    type: 'spring',
    stiffness: 300,
    damping: 20
  },
  viewpoint: {
    once: false,
    amount: 0.5
  }
}
}

  return (
        
    <motion.div  className='px-10 my-10 md:px-32 lg:px-44' id='services'>
        <motion.h1 variants={item} initial='hidden' whileInView='show' className='font-open-sans text-5xl my-5 md:text-7xl lg:8xl '>Our Services</motion.h1>
        <motion.span variants={item} initial='hidden' whileInView='show'  className='font-merriweather text-center text-base text-gray-500 md:my-5 md:text-xl lg:text-2xl'>
          We provide students with a wide spectrum of opportunities
        </motion.span>
        <motion.div variants={container} initial='hidden' whileInView='show'>
            <List 
            parent={item}
            items={services}
            />
        </motion.div>
    </motion.div>
        

  )
}

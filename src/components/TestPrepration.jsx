import {  motion } from 'framer-motion'
import React from 'react'
import { Card } from './Card'


export const TestPrepration = () => {

  const heading = {
    hidden: {opacity: 0, x: 200},
    show: {opacity: 1, x: 0, transition: {
      duration: 0.5,
      ease: 'easeInOut',
      type: 'spring',
      stiffness: 300,
      damping: 20
    },
    viewport: {
      once: false,
      amount: 0.5
    }
  }}
  const container = {
    show: {
      transition:{
        staggerChildren: 0.5
      }
    }
  }
  const animator = {
    show: { opacity: 1, y: 0,
      transition: {
        duration: 1,
        ease: 'easeIn',
      },
      viewport: {
        once: false,
        amount: 0.5
      }
    },
    hidden: {
      opacity: 0,
      y: -30
    }
  }

    const traniningPreprationn = [
        {id: 1, title: 'ilets', description: 'something', url: 'something'},
        {id: 2, title: 'pte', description: 'something', url: 'something'},
        {id: 3, title: 'toefl', description: 'something', url: 'something'},
        {id: 4, title: 'sat', description: 'something', url: 'something'},
        {id: 5, title: 'gre', description: 'something', url: 'something'},
        {id: 6, title: 'gmat', description: 'something', url: 'something'},
    ]

  return (
    <>
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-10 px-10 my-10 md:px-32 lg:px-44' id='training'>
      <motion.h1 variants={heading} initial='hidden' whileInView='show' className='text-5xl md:text-7xl mb-10 font-open-sans'>We offers</motion.h1>
      <motion.div className='grid gap-10 md:grid-cols-2 xl:grid-cols-3' variants={container} initial='hidden' whileInView='show' >
       

          {
            traniningPreprationn.map(item=>(
                  <Card
                  parent={animator}
                  key={item.id}
                  title={item.title}
                  desc={item.description}
                  link={item.url}
                  />
                  ))
          }
        
      </motion.div>
    </div>
    </>
  )
}

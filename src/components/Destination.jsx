import React from 'react';
import { DestinationCard } from './common/DestinationCard';
import AustralianImage from '../img/country/aus.jpg'
import NewZealandImage from '../img/country/new-zealand.png'
import CanadaImage from '../img/country/canadian-flag.webp';
import { motion } from 'framer-motion';


export const Destination = () => {
  const container = {
    show: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.8
      }
    }
  }
  
  const header = {
    hidden: {
      opacity: 0,
      x: 40
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 300
      },
      viewpoint: {
        once: false,
        amount: 0.4
      }
    }
  }

  const items = {
    hidden: {
      opacity: 0,
      y: -40
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 200
      },
      viewpoint: {
        once: false,
        amount: 0.5
      }
    }
  }
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white my-10 px-10 py-10 md:py-16 flex flex-col items-center justify-center  md:px-32 lg:px-44 '>
        <motion.h1 variants={header} initial='hidden' whileInView='show' className='font-bold font-open-sans text-lg mb-3 md:text-3xl lg:text-4xl md:mb-5'>The Best Study Destinations Across The Globe</motion.h1>

        <motion.span variants={items} initial='hidden' whileInView='show'  className='text-slate-200 mb-3 font-merriweather md:text-lg lg:text-xl md:mb-5'>Start Your Overseas Education Journey with the best education consultancy in Nepal - AECC Global!
            Explore more about the most preferred international study destinations by Nepalese students.
        </motion.span>


        <motion.div variants={container} initial='hidden' whileInView='show' className='grid gap-12 md:grid-cols-2 lg:grid-cols-3'>
          {/* parents means we are passing variants as a props */}
            <DestinationCard 
            parent={items}
            heading='Australia'
            description='Study in one of the world is New Zealand and discover the most relaxed country, and benefit from Australia’s incredible reputation for quality education and student satisfaction.'
            photo={AustralianImage}
            />
            <DestinationCard 
            parent={items}
            heading='New Zealand'
            description="xplore the beauty of New Zealand and discover a new cultural experience and exciting adventures amongst the world's most friendly people for quality education and student satisfaction."
            photo={NewZealandImage}
            />
            <DestinationCard 
            parent={items}
            heading='Canada'
            description='Experience the wild landscape New Zealand and discover a new cultural and beautiful natural environment of Canada and enjoy living in a tolerant and multicultural society that welcomes innovation.'
            photo={CanadaImage}
            />

       

        </motion.div>

    </div>
  )
}

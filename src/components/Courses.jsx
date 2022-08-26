import { motion } from 'framer-motion'
import React from 'react'
import AppliedScience from '../img/colleges/Applied-Science.jpg'
import Architecture from '../img/colleges/Architecture.jpg'
import BioPhysics from '../img/colleges/Biophysics.jpg'
import Marine from '../img/colleges/Marine-Science.jpg'
import Science from '../img/colleges/Science.webp'
import { Subject } from './common/Subject'


export const Courses = () => {
    const courseList = [
        {id: 1, name: 'Applied Science', img: AppliedScience},
        {id: 2, name: 'Architecture', img: Architecture},
        {id: 3, name: 'BioPhysics', img: BioPhysics},
        {id: 4, name: 'Marine Science', img: Marine},
        {id: 5, name: 'Psychology', img: Architecture},
        {id: 6, name: 'Science & technology', img: Science},
    ]
    const container = {
      show: {
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.5
        }
      }
    }
    const items = {
      hidden: {opacity: 0, y: -40},
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1
        }
      }
    }
  return (
    <motion.div className='px-10 my-10 md:px-32 lg:px-44 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-10 md:py-16' id='courses'>
        <h1 className=' font-open-sans text-5xl md:text-7xl mb-5'>Popular Courses for Students</h1>
        {/* course list */}
        <motion.div variants={container} initial='hidden' whileInView='show' className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
           
           {
            courseList.map((subject)=>(
                <Subject 
                items={items}
                key={subject.id}
                pic={subject.img}
                name={subject.name}
                />
            ))
           }
        </motion.div>
    </motion.div>
  )
}

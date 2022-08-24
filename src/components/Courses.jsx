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
  return (
    <div className='px-10 my-10 md:px-32 lg:px-44 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-10 md:py-16'>
        <h1 className=' font-mono text-3xl mb-5 font-bold'>Popular Courses for Students</h1>
        {/* course list */}
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
           
           {
            courseList.map((subject)=>(
                <Subject 
                key={subject.id}
                pic={subject.img}
                name={subject.name}
                />

            ))
           }
        </div>
    </div>
  )
}

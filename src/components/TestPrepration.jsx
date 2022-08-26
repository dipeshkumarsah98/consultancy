import React from 'react'
import { Card } from './Card'

export const TestPrepration = () => {

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
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-10 px-10 my-10 md:px-32 lg:px-44'>
      <h1 className='text-5xl md:text-7xl mb-10 font-open-sans'>We offers</h1>
      <div className='grid gap-10 md:grid-cols-2 xl:grid-cols-3'>
      {
        traniningPreprationn.map(item=>(
              <Card
              key={item.id}
              title={item.title}
              desc={item.description}
              link={item.url}
              />
              ))
            }
      </div>
    </div>
    </>
  )
}

import React from 'react'

export const College = ({items}) => {
  return (
      
        <div className='my-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-10'>
        {
            items.map(item=>(
                <img 
                key={item.id} 
                src={item.pic} alt="Uni" 
                className='w-40 h-40 drop-shadow-lg cursor-pointer md:w-60 md:h-60 lg:w-72 lg:h-72 hover:scale-105 transition-transform' />
            ))
        }
        </div>
    
  )
}

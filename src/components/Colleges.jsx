import React from 'react';
import Uni1 from '../img/university/AIHE_logo.png'
import Uni2 from '../img/university/CQUniversity_Australia_logo.svg.png'
import Uni3 from '../img/university/ECA.png'
import Uni4 from '../img/university/sydneymet-logo.png'
import Uni5 from '../img/university/uot.png'
import Uni6 from '../img/university/victoria.png'
import { College } from './common/College';

export const Colleges = () => {
    const universityesList = [
        {id: 1, pic: Uni1},
        {id: 2, pic: Uni2},
        {id: 3, pic: Uni3},
        {id: 4, pic: Uni4},
        {id: 5, pic: Uni5},
        {id: 6, pic: Uni6},
    ]
  return (
<div className='px-10 my-20 md:px-32 lg:px-44'>
    <h1 className='font-open-sans text-5xl mb-2 lg:text-7xl'>College & Universities</h1>
    <span className='font-lato font-bold text-slate-500 text-lg text-center md:text-2xl'>We work with some of the best
    educational institutions around the 
    </span>
        <College items={universityesList} />
    

</div>
)
  
}

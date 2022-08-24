import React from 'react'
import {Carousel} from 'flowbite-react';
import { CarouselItem } from './CarouselItem';

export const Review = () => {
  return (

    <div className="h-[50vh] sm:h-64 lg:h-[50vh] xl:h-[50vh] 2xl:h-[50vh]">
        <Carousel
        leftControl=' '
        rightControl=' '
        indicators={false}
        >
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
        </Carousel>
    </div>
  )
}

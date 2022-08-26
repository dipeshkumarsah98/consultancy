import React from 'react'
import { Helmet } from 'react-helmet';
import {Testimonial} from '../components/Testimonial'
import { Courses } from "../components/Courses";
import { Destination } from '../components/Destination';
import { Services } from '../components/Services';
import { TestPrepration } from '../components/TestPrepration';
import { Banner } from '../components/Banner';
import { Colleges } from '../components/Colleges';

export const HomePage = () => {
  return (
    <>
    <Helmet>
      <title>DGN | Home</title>
    </Helmet>

    <Banner />
    <TestPrepration />
    <Services />
    <Destination />
    <Testimonial />
    <Courses />
    <Colleges />
    </>
  )
}

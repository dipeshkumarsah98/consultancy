import React from 'react'
import {Helmet} from 'react-helmet'
import { About } from '../components/About'

export const AboutPage = () => {
  return (
    <>
    <Helmet>
      <title>DGN | About</title>
    </Helmet>
    <About />
    </>
  )
}

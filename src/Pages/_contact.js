import React from 'react'
import {Helmet} from 'react-helmet'
import { ContactAddress } from '../components/common/ContactAddress'
import { ContactForm } from '../components/common/ContactForm'
import { Contact } from '../components/Contact'

export const ContactPage = () => {
  return (
   <>
   <Helmet>
      <title>DGN | About</title>
    </Helmet>
   <Contact />
   <ContactAddress /> 
   <ContactForm />
   </>
  )
}

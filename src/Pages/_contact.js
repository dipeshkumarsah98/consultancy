import React from 'react'
import { ContactAddress } from '../components/common/ContactAddress'
import { ContactForm } from '../components/common/ContactForm'
import { Contact } from '../components/Contact'

export const ContactPage = () => {
  return (
   <>
   <Contact />
   <ContactAddress /> 
   <ContactForm />
   </>
  )
}

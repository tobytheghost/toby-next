import React from 'react'
import ContactForm from '../components/parts/Contact/Contact'
import Meta from '../components/parts/Meta/Meta'

const meta = {
  title: 'Contact - Web Developer',
  description:
    "Questions? Queries? Contact me to see what I can do for you. Let's make something together!",
  canonical: 'https://tobygates.co.uk/contact/'
}

const Contact = () => {
  return (
    <>
      <Meta meta={meta} />
      <ContactForm />
    </>
  )
}

export default Contact

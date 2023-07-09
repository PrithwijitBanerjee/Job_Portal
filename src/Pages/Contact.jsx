import React from 'react'
import ContactMap from '../Components/Cores/CoreContact/ContactMap'
import ContactForm from '../Components/Cores/CoreContact/ContactForm'
import Header from '../Components/Commons/Header'
import Footer from '../Components/Commons/Footer'
const Contact = () => {
  return (
    <>
      <Header/>
      <ContactMap/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default Contact
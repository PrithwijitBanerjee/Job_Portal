import React from 'react'
import JobDetailCarousel from '../Components/Cores/CoreJobDetail/JobDetailCarousel'
import JobDetailContent from '../Components/Cores/CoreJobDetail/JobDetailContent'
import { useParams } from 'react-router-dom'
import Header from '../Components/Commons/Header'
import Footer from '../Components/Commons/Footer'

const JobDetail = () => {
  const {id}=useParams();
  return (
      <>
      <Header/>
        <JobDetailCarousel/>
        <JobDetailContent id={id}/>
      <Footer/>  
      </>
  )
}

export default JobDetail
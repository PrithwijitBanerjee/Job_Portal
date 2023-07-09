import React from 'react'
import CoreJobSlider from '../Components/Cores/CoreJobList/CoreJobSlider'
import SearchHome from '../Components/Cores/CoreHome/SearchHome'
import CoreJobContent from '../Components/Cores/CoreJobList/CoreJobContent'
import Header from '../Components/Commons/Header'
import Footer from '../Components/Commons/Footer'

const JobList = () => {
  return (
      <>
      <Header/>
        <CoreJobSlider/>
        <SearchHome/>
        <CoreJobContent/>
      <Footer/>  
      </>
  )
}

export default JobList
import React from 'react'
import CarouselHome from '../Components/Cores/CoreHome/CarouselHome'
import SearchHome from '../Components/Cores/CoreHome/SearchHome'
import JobCategory from '../Components/Cores/CoreHome/JobCategory'
import RecontJobHome from '../Components/Cores/CoreHome/RecontJobHome'
// import FeaturedCompanyHome from '../Components/Cores/CoreHome/FeaturedCompanyHome'
import JobTendHome from '../Components/Cores/CoreHome/JobTendHome'
import RecentJobSlider from '../Components/Cores/CoreHome/RecentJobSlider'
import Header from '../Components/Commons/Header'
import Footer from '../Components/Commons/Footer'

const Home = () => {
  return (
    <>
      <Header/>
      <CarouselHome/>
      <SearchHome/>
      <JobCategory/>
      <RecontJobHome/>
      {/* <FeaturedCompanyHome/> */}
      <JobTendHome/>
      <RecentJobSlider/>
      <Footer/>
    </>
  )
}
export default Home
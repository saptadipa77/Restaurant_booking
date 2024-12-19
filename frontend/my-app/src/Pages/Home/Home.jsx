import React from 'react'
import HeroSection from '../../components/HeroSection.jsx'
import About from '../../components/About.jsx'
import Qualities from '../../components/Qualities.jsx'
import Menu from '../../components/Menu'
import WhoAreWe from '../../components/WhoAreYou.jsx'
import Team from '../../components/Team'
import Reservation from '../../components/Reservation'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <About/>
      <Qualities/>
      <Menu/>
      <WhoAreWe/>
      <Team/>
      <Reservation/>
      <Footer/>
    </>
  )
}

export default Home
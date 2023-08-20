import React from 'react'
import '../styles/Homepage.css'
import { About, Contact, Ethos, Events, Execs, Goals, Hero, Navbar, PS, Pubs, SplashScreen } from '../components/export'
import "../styles/Homepage.css"
import { useMediaQuery } from '@chakra-ui/react'
function Homepage() {

  const [isMobileMode] = (useMediaQuery('(max-width: 800px)'));

  //ids below are for link for navbar page

  return (
    <>
    <div className="homePage-container">

      {isMobileMode ? 
      null
    : <SplashScreen></SplashScreen>}

    <Navbar></Navbar>
    <Hero></Hero>
    <Ethos></Ethos>
    <About></About>
    <Goals></Goals>
    <PS></PS>
    <Execs></Execs>
    <Pubs></Pubs>
    <Events></Events>
    <Contact></Contact>
    </div>
    </>
  )
}

export default Homepage
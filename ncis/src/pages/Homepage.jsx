import React from 'react'
import '../styles/Homepage.css'
import { About, Contact, Ethos, Events, Execs, Goals, Hero, Navbar, PS, Pubs, SplashScreen } from '../components/export'
import { Splash } from '../images/export'
import "../styles/Homepage.css"
function Homepage() {

  //ids below are for link for navbar page but need to revise

  return (
    <>
    <div className="homePage-container">
    {/* <SplashScreen></SplashScreen> */}
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
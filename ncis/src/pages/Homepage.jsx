import React from 'react'
import '../styles/Homepage.css'
import { About, Contact, Ethos, Events, Execs, Goals, Hero, Navbar, PS, Pubs, SplashScreen } from '../components/export'
import { Splash } from '../images/export'
function Homepage() {

  //ids below are for link for navbar page but need to revise

  return (
    <>
    <div>
    <SplashScreen></SplashScreen>
    <Navbar></Navbar>
    <Hero></Hero>
    <Ethos id="ethos"></Ethos> 
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
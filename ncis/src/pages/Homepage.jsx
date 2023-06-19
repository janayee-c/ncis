import React from 'react'
import '../styles/Homepage.css'
import { About, Contact, Ethos, Events, Execs, Goals, Hero, Navbar, PS, Pubs } from '../components/export'
import { Splash } from '../images/export'
function Homepage() {

  return (
    <>
    <video width="500" height="500" controls autoPlay>
    <source src={Splash} type="video/mp4" />
    Your browser does not support the video tag.
</video> 
    <div>
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
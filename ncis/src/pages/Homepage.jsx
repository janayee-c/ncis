import React from 'react'
import '../styles/Homepage.css'
import { About, Contact, Ethos, Events, Execs, Goals, Hero, Navbar, PS, Pubs } from '../components/export'
function Homepage() {

  return (
    <div>
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
  )
}

export default Homepage
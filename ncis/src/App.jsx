import React from 'react'
import './App.css'
import { About, Contact, Ethos, Events, Execs, Goals, Hero, Navbar, PS, Pubs } from './components/export'
function App() {

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

export default App

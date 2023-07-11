import React from 'react'
import '../styles/Events.css'
import { Heading } from '../components/export'
import { Container } from "@chakra-ui/react"
import { TLMDS } from "../images/export"

const Events = () => {

  return (
    <section id="events-section" className="events-section">
      <Container className="events-container" maxW="100%"> 
      <Heading center={true} title="EVENTS"></Heading>
      <div className="events-content">Annual Event: <a href="https://tlmdsummit.com/">Tech, Law, and Maritime Defense Summit</a>
      <img className="events-image" src={TLMDS}></img>
      <p className="events-desc">The Tech, Law, and Maritime Defense Summit is a three day symposium that brings together researchers, government leaders, and industry practitioners concerned with the application of emerging technologies such as Artificial Intelligence in addressing challenges in the maritime domain.</p>
      </div>
      <div className="events-diag"></div>
      </Container>
    </section>
  )
}

export default Events
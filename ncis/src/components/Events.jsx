import React from 'react'
import '../styles/Events.css'
import { Heading } from '../components/export'
import { Container } from "@chakra-ui/react"
import { TLMDS } from "../images/export"

const Events = () => {

  return (
    <section id="events-section" className="events-section">
      <section className="diag-container"></section>
      <Container className="events-container" maxW="100%"> 
      <Heading center={true} title="EVENTS"></Heading>
      <div className="events-content">Annual Event: <a href="https://tlmdsummit.com/">Tech, Law, and Maritime Defense Summit</a>
      <img className="events-image" src={TLMDS}></img>
      </div>
      </Container>
    </section>
  )
}

export default Events
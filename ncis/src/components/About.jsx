import React from 'react'
import '../styles/About.css'
import { ABOUT } from "../constants/export"
import { Container } from '@chakra-ui/react'
import { Heading } from '../components/export'

  //ethos-section is entire section 
  //diag-container before:: diagonal element above section 
  //e-container includes all content (heading included)

const About = () => {
  return (
  <section id="about-section" className="about-section" maxHeight="100vh" maxW="100vw">
      <Container className="about-container" maxWidth="100%">
      <Heading title="ABOUT" center={true} ></Heading>
        <div className="about-content" textAlign="center">
         <p className="about-txt">{ABOUT}</p>
        </div>
      </Container>
      <div className="about-diag"></div>
    </section>
  )
}

export default About
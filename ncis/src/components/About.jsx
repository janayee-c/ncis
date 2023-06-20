import React from 'react'
import '../styles/About.css'
import { ABOUT } from '../constants/texts.js'
import { Container } from '@chakra-ui/react'
import { Heading } from '../components/export'

const About = () => {
  return (
    <section id="about-section">
      <Container className="about-container" maxWidth="100%" maxHeight="auto" padding="3%">
      <Heading title="ABOUT" center={true} ></Heading>
        <div className="about-content" textAlign="center">
         <p className="about-txt">{ABOUT}</p>
        </div>
      </Container>
    </section>
  )
}

export default About

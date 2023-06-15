import React from 'react'
import '../styles/About.css'
import { ABOUT } from '../constants/texts.js'
import { Container } from '@chakra-ui/react'
import { Heading } from '../components/export'

const About = () => {
  return (
    <section id="about">
      <Container className="acontainer" maxWidth="100%" maxHeight="auto" padding="3%">
        <div className="content" textAlign="center">
         <Heading center={true} title="ABOUT"></Heading>
         <p>{ABOUT}</p>
        </div>
      </Container>
    </section>
  )
}

export default About
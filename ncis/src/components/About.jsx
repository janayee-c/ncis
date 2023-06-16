import React from 'react'
import '../styles/About.css'
import { ABOUT } from '../constants/texts.js'
import { Container } from '@chakra-ui/react'
import { Heading } from '../components/export'

const About = () => {
  return (
    <section id="about">
      <Container className="acontainer" maxWidth="100%" maxHeight="auto" padding="3%">
      <Heading title="ABOUT"></Heading>
        <div className="content" textAlign="center">
         <p>{ABOUT}</p>
        </div>
      </Container>
    </section>
  )
}

export default About

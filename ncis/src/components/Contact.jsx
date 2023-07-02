import React from 'react'
import '../styles/Contact.css'
import { Heading } from '../components/export'
import { Container } from '@chakra-ui/react'


const Contact = () => {
  return (
    <section id="contact-section" className="contact-section"> 
    <div className="diag-container"></div>
    <Container className="contact-container">
      <Heading center={true} title="CONTACT"></Heading>
    </Container>
    </section>
  )
}

export default Contact
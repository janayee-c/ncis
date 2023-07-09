import React from 'react'
import '../styles/Contact.css'
import { Heading } from '../components/export'
import { Container, Grid } from '@chakra-ui/react'


const Contact = () => {
  return (
    <section id="contact-section" className="contact-section"> 
    <Container className="contact-container" maxW="100%">
      <Heading center={true} title="CONTACT"></Heading>
      <div className="contact-content">
        <Grid></Grid>
      </div>
    </Container>
    </section>
  )
}

export default Contact
import React from 'react'
import '../styles/Contact.css'
import { Heading } from '../components/export'
import { Container, Grid, useMediaQuery } from '@chakra-ui/react'


const Contact = () => {

  const isMinimized = useMediaQuery('(max-width: 1000px)')
  return (
    <section id="contact-section" className="contact-section"> 
    <Container className="contact-container" maxW="100%">
      <Heading center={true} title="CONTACT"></Heading>
      <div className="contact-content">
        <Grid templateColumns={isMinimized ? "1fr " : "1fr 1fr 1fr"} justifyItems="center" gap={1} padding="10px"> </Grid>
      </div>
    </Container>
    </section>
  )
}

export default Contact
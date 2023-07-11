import React from 'react'
import '../styles/Contact.css'
import { Heading } from '../components/export'
import { Container, Grid, useMediaQuery } from '@chakra-ui/react'
import {Mail, Twitter, Linkedin, Location} from '../images/export'


const Contact = () => {

  const isMinimized = useMediaQuery('(max-width: 1000px)')
  return (
    <section id="contact-section" className="contact-section"> 
    <Container className="contact-container" width="100vw">
      <Heading center={true} title="CONTACT"></Heading>
      <div className="contact-content">
        
        <Grid id="contact-grid" templateColumns={isMinimized ? "1fr " : "1fr 1fr"} alignItems="left" gap={8} padding="10px"> 
        
        <div className="mail-section">
        <img src={Mail}></img>
        </div>

        <div className="location-section">
        <img src={Location}></img>
        </div>
        </Grid>
      </div>
    </Container>
    </section>
  )
}

export default Contact
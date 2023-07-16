import React from 'react'
import '../styles/Contact.css'
import { Heading } from '../components/export'
import { Container, Grid, GridItem, useMediaQuery } from '@chakra-ui/react'
import {Mail, Twitter, Linkedin, Location, Mantra} from '../images/export'


const Contact = () => {

  const isMinimized = useMediaQuery('(max-width: 900px)')

  return (
    <section id="contact-section" className="contact-section"> 
    <Container className="contact-container" maxW="100vw">
      <Heading center={true} title="CONTACT"></Heading>
      <div className="contact-content">
        
      <Grid templateColumns='repeat(2, 1fr)' templateRows='(1fr, 1fr)' gap={1}>

  <GridItem w='100%' h='100%' colSpan={1}>
    <div className="contact-block">
      <img src={Mail}></img>
      <p>info@ncis-tech.com</p>
    </div>
  </GridItem>

  <GridItem w='100%' h='100%' rowSpan={2}>
        <img className="NCIS-contact-logo" src={Mantra}></img>
  </GridItem>


  <GridItem w='100%' h='100%' colSpan={1}>
    <div className="contact-block">
      <img src={Location} ></img>
      <p>Headquarters: Vancouver, BC, Canada</p>
    </div>
  </GridItem> 

  <GridItem w='100%' h='100%' colSpan={2}>
  < div className="contact-divider"></div>
  </GridItem>

  <GridItem w='100%' h='100%' colSpan={1}>
    <div className="socials-block">
      <a className="socials-icon"href="">
        <img src={Linkedin}></img>
        </a>
      <a className="socials-icon" href="https://twitter.com/ncis_tech">
        <img src={Twitter}></img>
      </a>
    </div>
  </GridItem>


</Grid>

<div className="copyright">
  <p>©Copyright 2023 | NCIS | All Rights Reserved</p>
</div>
      </div>
    </Container>
    
    </section>
  )
}

export default Contact
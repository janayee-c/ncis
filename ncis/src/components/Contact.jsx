import React from 'react';
import '../styles/Contact.css';
import { Heading } from '../components/export';
import { Container, Grid, GridItem, useMediaQuery } from '@chakra-ui/react';
import { Mail, Twitter, Linkedin, Location, Mantra } from '../images/export';


const Contact = () => {

  const [isMinimizedMode] = useMediaQuery('(max-width: 600px)')


  return (
    <section id="contact-section" className="contact-section">
      <Container className="contact-container" maxW="100vw">
        <Heading center title="CONTACT" />
        <div className="contact-content">
          
          
          
          <Grid templateColumns="repeat(2, 1fr)" gap={1}>
            <GridItem>
              <div className="contact-block">
                <img src={Mail} alt="Mail" />
                <p>info@ncis-tech.com</p>
              </div>
            </GridItem>
            <GridItem rowSpan={2}>
              <img className="NCIS-contact-logo" src={Mantra} alt="Mantra" />
            </GridItem>
            <GridItem>
              <div className="contact-block">
                <img src={Location} alt="Location" />
                <p>Headquarters: Vancouver, BC, Canada</p>
              </div>
            </GridItem>
            <GridItem colSpan={2}>
              <div className="contact-divider"></div>
            </GridItem>
            <GridItem>
              <div className="socials-block">
                <a className="socials-icon" href="#">
                  <img src={Linkedin} alt="LinkedIn" />
                </a>
                <a className="socials-icon" href="https://twitter.com/ncis_tech">
                  <img src={Twitter} alt="Twitter" />
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
  );
}

export default Contact;

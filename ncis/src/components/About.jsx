import React from 'react';
import '../styles/About.css';
import { ABOUT } from "../constants/export";
import { Container } from '@chakra-ui/react';
import { Heading } from '../components/export';

const About = () => (
  <section id="about-section" className="about-section">
    <Container className="about-container" maxWidth="100%" padding="8px">
      <Heading title="ABOUT" center={true} />
      <div className="about-content" textAlign="center">
        <p className="about-txt">{ABOUT}</p>
      </div>
      <div className="about-diag"></div>
    </Container>
  </section>
);

export default About;

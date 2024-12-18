import React from 'react';
import '../styles/Events.css';
import { Heading } from '../components/export';
import { Container } from "@chakra-ui/react";
import { TLMDS } from "../images/export";

const Events = () => {
  return (
    <section id="events-section" className="events-section">
      <Container className="events-container" maxW="100%" paddingLeft="0" paddingRight="0">
        <Heading center title="EVENTS" />
        <div className="events-content">
          <p>Annual Event: <u><a href="https://tlmdsummit.com/">Tech, Law and Maritime Defense </a></u></p>
          <img className="events-image" src={TLMDS} alt="Tech, Law, and Maritime Defense Summit" />
          <p className="events-desc">The Tech, Law, and Maritime Defense Summit is a three-day symposium that brings together researchers, government leaders, and industry practitioners concerned with the application of emerging technologies such as Artificial Intelligence in addressing challenges in the maritime domain.</p>
        </div>
        <div className="events-diag"></div>
      </Container>
    </section>
  );
}

export default Events;



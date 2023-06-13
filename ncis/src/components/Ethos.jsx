import React, { useState, useEffect} from 'react'
import '../styles/Ethos.css'
import { Heading } from '../components/export'
import { Container } from '@chakra-ui/react'

const Ethos = () => {
  return (
    <section id="ethos">
      <Container className="econtainer" max-width="100%">
         <Heading title="ETHOS"></Heading>
      </Container>
    </section>
  )
}

export default Ethos
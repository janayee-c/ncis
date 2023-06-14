import React from 'react'
import '../styles/PS.css'
import { Heading } from '../components/export'
import { Container } from '@chakra-ui/react'

const PS = () => {
  return (
    <section>
    <Container className="ps-container" maxW="100%">
    <Heading title="PRODUCTS & SERVICES"></Heading>
    </Container>
    </section>
  )
}

export default PS
import React from 'react'
import '../styles/PS.css'
import { Heading } from '../components/export'
import { Container } from '@chakra-ui/react'

const PS = () => {
  return (
    <section id="products-section">
    <Container className="ps-container" maxW="100%">
    <Heading center={true} title="PRODUCTS & SERVICES"></Heading>
    </Container>
    </section>
  )
}

export default PS
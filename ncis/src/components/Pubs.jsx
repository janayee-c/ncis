import React from 'react'
import '../styles/Pubs.css'
import { Heading } from '../components/export'
import { Container, Grid } from '@chakra-ui/react'
import { Publication } from "./export"

const Pubs = () => {

  const publications= [
  
      {title:"test", pubHead:"test", pubDesc:"test"},
      {},
      {},
      {},
      {},
      {},


    ]


  return (
    <section id="pubs-section" className="pubs-section" maxH="100%">
      <section className="diag-container" maxW="100%"></section>
    <Container className="pubs-container" maxW="100%">
    <Heading center={true} title="PUBLICATIONS & MEDIA"></Heading>
    <Grid templateColumns= "1fr 1fr 1fr" justifyItems="center" gap={1} padding="10px"> {/* if adding new items add new frames (fr) */}
    {publications.map((publication, index) => (
              <Publication
              pubHead = {publication.pubHead}
              title ={publication.title}
              desc = {publication.desc}
              ></Publication>
            ))}
    
        </Grid>
    </Container>
    </section>
  )
}

export default Pubs
import React from 'react'
import '../styles/Pubs.css'
import { Heading } from '../components/export'
import { Container, Grid, GridItem } from '@chakra-ui/react'
import { Publication } from "./export"
import { PUBTEXTS } from "../constants/export"

const Pubs = () => {

  const publications= [
  
      { pubHead:"Publication: Environmental Studies", 
        pubTitle:"Fish Crimes in the Global Oceans",  
        pubDesc: PUBTEXTS.fishCrimes },

      { pubHead:"Media: IUU Fishing",
        pubTitle:"Part IV: The High Seas",
        pubDesc: PUBTEXTS.highSeas },

      { pubHead: "Publication: Ocean Crimes",
        pubTitle: "Narco-Fish: Global Fisheries and Drug Trafficking",
        pubDesc: PUBTEXTS.narcoFish },
        
      { pubHead: "Publication: Nature Human Behaviours",
        pubTitle: "Ocean Sustainability for All Requires Deeper Behavioural Research",
        pubDesc: PUBTEXTS.behaviouralResearch },

      { pubHead: "Publication: Coastal Management",
        pubTitle: "The COVID-19 Pandemic, Small-Scale Fisheries and Coastal Fishing Communities",
        pubDesc: PUBTEXTS.ssFisheries },

      { pubHead: "Publication: Marine Affairs and Policy",
        pubTitle: "Adjacency and Vessels Domestication as Enablers of Fish Crimes",
        pubDesc: PUBTEXTS.adjacencyDomestication }

    ]


  return (
    <section id="pubs-section" className="pubs-section" maxH="100%">
      <section className="diag-container" maxW="100%"></section>
    <Container className="pubs-container" maxW="100%">
    <Heading center={true} title="PUBLICATIONS & MEDIA"></Heading>
    <Grid templateColumns= "repeat(3, 1fr)" justifyItems="center" gap={1} padding="30px" paddingTop="0px"> {/* if adding new items add new frames (fr) */}
    {publications.map((publication, index) => (
      <GridItem justifyContent="space-between" key={index} colSpan={1} rowSpan={1}> {/* Set the colSpan and rowSpan to 1 */}
              <Publication
              pubHead = {publication.pubHead}
              title ={publication.pubTitle}
              desc = {publication.pubDesc}
              ></Publication>
      </GridItem>
            ))}
        </Grid>
    </Container>
    </section>
  )
}

export default Pubs
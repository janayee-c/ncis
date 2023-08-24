import React from 'react'
import '../styles/Pubs.css'
import { Heading } from '../components/export'
import { Container, Grid, GridItem, useMediaQuery } from '@chakra-ui/react'
import { Publication } from "./export"
import { PUBTEXTS } from "../constants/export"

const Pubs = () => {
  const [isMobile] = useMediaQuery('(max-width: 500px)');
  const [isSmall] = useMediaQuery('(max-width: 800px)');

  const gridStyle = isMobile ? "1fr" : (isSmall ? "1fr 1fr" : "1fr 1fr 1fr");


  const publications= [
  
      { pubHead:"Publication: Environmental Studies", 
        pubTitle:"Fish Crimes in the Global Oceans",  
        pubDesc: PUBTEXTS.fishCrimes,
        url: "https://onlinelibrary.wiley.com/doi/abs/10.1111/faf.12483"  },

      { pubHead:"Media: IUU Fishing",
        pubTitle:"Part IV: The High Seas",
        pubDesc: PUBTEXTS.highSeas, 
        url: "https://foreignpolicy.com/podcasts/the-catch/part-iv-the-high-seas/"},

      { pubHead: "Publication: Ocean Crimes",
        pubTitle: "Narco-Fish: Global Fisheries and Drug Trafficking",
        pubDesc: PUBTEXTS.narcoFish,
        url: "https://onlinelibrary.wiley.com/doi/abs/10.1111/faf.12483"},
        
      { pubHead: "Publication: Nature Human Behaviours",
        pubTitle: "Ocean Sustainability for All Requires Deeper Behavioural Research",
        pubDesc: PUBTEXTS.behaviouralResearch,
        url: "https://www.nature.com/articles/s41562-021-01256-9"},

      { pubHead: "Publication: Coastal Management",
        pubTitle: "The COVID-19 Pandemic, Small-Scale Fisheries and Coastal Fishing Communities",
        pubDesc: PUBTEXTS.ssFisheries,
        url: "https://www.tandfonline.com/doi/full/10.1080/08920753.2020.1766937" },

      { pubHead: "Publication: Marine Affairs and Policy",
        pubTitle: "Adjacency and Vessels Domestication as Enablers of Fish Crimes",
        pubDesc: PUBTEXTS.adjacencyDomestication,
        url: "https://www.frontiersin.org/articles/10.3389/fmars.2022.936174/full" }

    ]

    return (
      <section id="pubs-section" className="pubs-section" maxH="100%">
        <Container className="pubs-container" maxW="100%">
          <Heading center={true} title="PUBLICATIONS & MEDIA" />
          <div className="pubs-grid">
            <Grid templateColumns={gridStyle} templateRows="repeat(300px)" justifyItems="center" gap={1} padding="10px" paddingTop="0px">
              {publications.map((publication, index) => (
                <GridItem key={index} colSpan={1} rowSpan={1}>
                  <Publication
                    url={publication.url}
                    pubHead={publication.pubHead}
                    title={publication.pubTitle}
                    desc={publication.pubDesc}
                  />
                </GridItem>
              ))}
            </Grid>
          </div>
          <div className="pubs-diag"></div>
        </Container>
      </section>
    );
  }
  
  export default Pubs;
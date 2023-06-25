import React from 'react'
import '../styles/PS.css'
import { Heading } from './export'
import { Edith, Grace, Hava } from '../images/export';
import { Container, Grid } from '@chakra-ui/react'
import OneProduct from "./OneProduct"

const PS = () => {

  const productPanel = [

    {name: "EDITH", source: Edith, row: "1", col: "1", },
    {name: "HAVA",  source: Hava, row: "1", col: "2"},
    {name: "GRACE", source: Grace, row: "1", col: "3"}

  ]

  return (
    <section id="products-section">
    <Container className="ps-container" maxW="100%">
    <Heading center={true} title="PRODUCTS & SERVICES"></Heading>

    <div className="inactiveProductPanel" maxW="60%"> 
    <Grid templateColumns="1fr 1fr 1fr" justifyItems="center" gap={1}>
    {productPanel.map((product, index) => (

              <OneProduct
              key={index}
              name={product.name}
              imgSource={product.source}
              isLinear={product.isLinear}
              row={product.row}
              col={product.col}
              height={product.height}
              ></OneProduct>
            ))}
    
        </Grid>
        </div>
    </Container>
    </section>
  )
}

export default PS
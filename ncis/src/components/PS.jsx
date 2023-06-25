import React, { useState, useRef } from 'react'
import '../styles/PS.css'
import { Heading } from './export'
import { Edith, Grace, Hava } from '../images/export'
import { Container, Grid } from '@chakra-ui/react'
import { DEVICETEXTS } from '../constants/export'
import OneProduct from "./OneProduct"

const PS = () => {

  const [activePanelVisible, setActivePanelVisible] = React.useState(false)
  const [selectedProduct, setSelectedProduct] = React.useState(null)



  const productPanel = [

    {name: "HAVA",  source: Hava, row: "1", col: "1", desc: DEVICETEXTS.hava},
    {name: "EDITH", source: Edith, row: "1", col: "2", desc: DEVICETEXTS.edith},
    {name: "GRACE", source: Grace, row: "1", col: "3", desc: DEVICETEXTS.grace}

  ]


  const handleProductClick = (product) => {
    setSelectedProduct(product); 
    setActivePanelVisible(true); 
    return ( (product === selectedProduct)) ? "hide-product" : ""
  }

  const closePanel = () => {
    setSelectedProduct(null); 
    setActivePanelVisible(false); 
  }

  const handlePanelVision = () => {
    return activePanelVisible ? 'fade-out' : '';
  };


  return (
    <section id="products-section">
    <Container className="ps-container" maxW="100%">
    <Heading center={true} title="PRODUCTS & SERVICES"></Heading>

    <Container maxW="100%" className={`panelContainer ${activePanelVisible ? 'transform-up' : ''}`}>

    <div className={`inactiveProductPanel ${handlePanelVision()}`}> 
    <Grid templateColumns="1fr 1fr 1fr" justifyItems="center" gap={1} padding="10px">
    {productPanel.map((product, index) => (

              <OneProduct
              key={index}
              name={product.name}
              imgSource={product.source}
              row={product.row}
              col={product.col}
              onClick = { () => handleProductClick(product)}
              isSelected={selectedProduct === product} 
              ></OneProduct>
            ))}
    
        </Grid>
        </div>


      {activePanelVisible && ( /* use && to make rest of rendering true */
        <div className="activeProductPanel" maxW="100%">
          <div className="panel-content">
            <p>{selectedProduct.desc}</p>
              <button onClick={closePanel}> X </button>
            </div>
          </div>
        )}
    </Container>
    </Container>
    </section>
  )
}

export default PS
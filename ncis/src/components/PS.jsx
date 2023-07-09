import React, { useState, useRef } from 'react'
import '../styles/PS.css'
import { Heading } from './export'
import { Edith, Grace, Hava } from '../images/export'
import { Container, Grid, useMediaQuery } from '@chakra-ui/react'
import { DEVICETEXTS } from '../constants/export'
import OneProduct from "./OneProduct"

const PS = () => {

  const [isMinimizedMode] = useMediaQuery('(max-width: 1000px)');

  const [activePanelVisible, setActivePanelVisible] = React.useState(false)
  const [selectedProduct, setSelectedProduct] = React.useState(null) //ref functionality for product 



  const productPanel = [

    {name: "HAVA",  source: Hava, row: "1", col: "1", desc: DEVICETEXTS.hava},
    {name: "EDITH", source: Edith, row: "1", col: "2", desc: DEVICETEXTS.edith},
    {name: "GRACE", source: Grace, row: "1", col: "3", desc: DEVICETEXTS.grace}

  ]


  const handleProductClick = (product) => {
    setSelectedProduct(product); 
    setActivePanelVisible(true); 
  }


  const closePanel = () => {
    setSelectedProduct(null); 
    setActivePanelVisible(false); 
  }

  const handlePanelVision = (product) => {
    if (activePanelVisible) {
       if (selectedProduct === product) {
        if (selectedProduct.index === 0 ) {
          return "translateRight"; //translate Hava right
        } else {
          return "translateLeft"; //translate Grace and Edith left 
       }
      } else {
        return "fade-out";
      }
    }
   return ""; 
  }


  return (
    <section id="products-section" className="products-section" maxW="100vw">
  
    <Container className="products-container" maxW="100%">
    <Heading center={true} title="PRODUCTS & SERVICES"></Heading>

    <Container maxW="100%" className= {activePanelVisible ? 'panelSwitch' : ''}>

    <div className={`inactiveProductPanel ${handlePanelVision()}`}> 
    <Grid templateColumns={isMinimizedMode ? "1fr" : "1fr 1fr 1fr"} justifyItems="center" gap={1} padding="10px"> {/* if adding new items add new frames (fr) */}
    {productPanel.map((product, index) => (
              <OneProduct
              key={index}
              name={product.name}
              imgSource={product.source}
              row={product.row}
              col={product.col}
              onClick = { () => handleProductClick(product)}
              isSelected={selectedProduct === product} 
              className={handlePanelVision(product)}
              ></OneProduct>
            ))}
    
        </Grid>
        </div>


      {activePanelVisible && ( /* use && to make rest of rendering true */
        <div className="activeProductPanel" maxW="100%">
          <div className="activePanelContent">
            <p>{selectedProduct.desc}</p>
              <button onClick={closePanel}> X </button>
            </div>
          </div>
        )}
    </Container>
    <div className="ps-diag"></div>
    </Container>
    </section>
    )
  };

export default PS;
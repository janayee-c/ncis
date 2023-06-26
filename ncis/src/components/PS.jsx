import React, { useState, useRef } from 'react'
import '../styles/PS.css'
import { Heading } from './export'
import { Edith, Grace, Hava } from '../images/export'
import { Container, Grid } from '@chakra-ui/react'
import { DEVICETEXTS } from '../constants/export'
import OneProduct from "./OneProduct"

const PS = () => {

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
          return "translateRight"; //translate Hava right, Grace and Edith left 
        } else {
          return "translateLeft";
       }
      } else {
        return "fade-out";
      }
    }
   return ""; 
  }


  return (
    <section id="products-section">
    <Container className="ps-container" maxW="100%">
    <Heading center={true} title="PRODUCTS & SERVICES"></Heading>

    <Container maxW="100%" className={`panelContainer ${activePanelVisible ? 'panelSwitch' : ''}`}>

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
    </Container>
    </section>
    )
  };

export default PS;
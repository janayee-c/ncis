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
    <section id="products-section" className="products-section" maxHeight="100vh" maxW="100vw">
    </section>
    )
  };

export default PS;
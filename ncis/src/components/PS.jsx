import React, { useState, useEffect } from 'react'
import '../styles/PS.css'
import { Heading, ProductPanel, OneProduct } from './export'
import { Edith, Grace, Hava } from '../images/export'
import { Container, Grid, useMediaQuery, Spinner } from '@chakra-ui/react'
import { DEVICETEXTS } from '../constants/export'
import { animate } from 'framer-motion'

const PS = () => {

  const [isMinimizedMode] = useMediaQuery('(max-width: 1000px)');

  const defaultProduct = {name: "Default Product",  desc: DEVICETEXTS.hava}; //product when nothing is selected// 

  const [activePanelVisible, setActivePanelVisible] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(defaultProduct) //ref functionality for product 
  const [hideSpinner, setHideSpinner] = useState(true)

  

  const productPanel = [
    {name: "HAVA",  source: Hava, desc: DEVICETEXTS.hava},
    {name: "EDITH", source: Edith, desc: DEVICETEXTS.edith},
    {name: "GRACE", source: Grace, desc: DEVICETEXTS.grace}

  ]

  const handleProductClick = (product) => {
    setSelectedProduct(product); 
    setActivePanelVisible(true); 
    animateProduct(product); 
  }

  const closePanel = () => {
    setSelectedProduct(defaultProduct); 
    setActivePanelVisible(false); 
  }

  const animateProduct = (product) => {
    if (activePanelVisible) {
    switch (product.name) {
      case 'HAVA':
        return selectedProduct.name === 'HAVA' ? { transform: 'translateX(80%)',
        transition: 'transform 2s', } : {opacity: 0};
      case 'EDITH':
        return selectedProduct.name === 'EDITH' ? { transform: 'translateX(-50%)' } : {opacity: 0};
      case 'GRACE':
        return selectedProduct.name === 'GRACE' ? { transform: 'translateX(-50%)' } : {opacity: 0};
      default:
        return {opacity: 0};
      }
    } else {
      return { transform: 'initial', opacity: 1 }
    };
  };

  useEffect(() => {
    animateProduct(selectedProduct);
    setHideSpinner(false)

    const timer = setTimeout(() => {
      setHideSpinner(true)
  }, 3000);
  
  return () => clearTimeout(timer);
  }, [selectedProduct]);

  return (
    <section id="products-section" className="products-section" maxW="100vw">
  
    <Container className="products-container" maxW="100%">
    <Heading center={true} title="PRODUCTS & SERVICES"></Heading>

    <Container maxW="100%" className= {activePanelVisible ? 'panelSwitch' : ''}> {/*makes the switch between active and inactive panels!*/}

    <div className={`inactiveProductPanel`}> 
    {hideSpinner ? <div> <Spinner opacity="0"size='xl'/></div> : 
    
    <div className={activePanelVisible ? 'showSpin' : 'hideSpin'}> {/* to prevent spinner showing upon initial load */}
        <Spinner  emptyColor='gray.100' size='xl'/>
    </div>}
    <Grid templateColumns='repeat(3, 1fr)' gap={1}> {/* if adding new items add new frames (fr) */}
    
    {productPanel.map((product, index) => (
      <button>
              <OneProduct
              key={index}
              name={product.name}
              imgSource={product.source}
              onClick = { () => handleProductClick(product)}
              isSelected={selectedProduct === product} 
              animateStyle={animateProduct(product)}
              ></OneProduct>
      </button>
            ))}
    
        </Grid>
        </div>
    
      <ProductPanel
          id="product-panel"
          heading={selectedProduct.name}
          description={selectedProduct.desc}
          isOpen={activePanelVisible}
          onClick={closePanel}>
      </ProductPanel>

    </Container>
    <div className="ps-diag"></div>
    </Container>
    </section>
    )
  };

export default PS;
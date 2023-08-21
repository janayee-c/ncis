//this is the Products & Services section 
import React, { useState, useRef } from 'react';
import '../styles/PS.css';
import { Heading, ProductPanel, OneProduct } from './export';
import { Edith, Grace, Hava } from '../images/export';
import { Container, Grid, SimpleGrid, useMediaQuery, GridItem } from '@chakra-ui/react';
import { DEVICETEXTS } from '../constants/export';

const PS = () => {


  const defaultProduct = { name: 'Default Product', desc: DEVICETEXTS.grace }; // Product when nothing is selected

  const [activePanelVisible, setActivePanelVisible] = useState(false); //toggles activity off or on 
  const [selectedProduct, setSelectedProduct] = useState(defaultProduct); //sets selectedProduct
  const [isMinimizedMode] = useMediaQuery('(max-width: 600px)');

  const refProducts = useRef([]); //this is an object that stores the references to each product ! 

  const [productHeight, setProductHeight] = useState(0);

  const productPanel = [
    { name: 'HAVA', source: Hava, desc: DEVICETEXTS.hava },
    { name: 'EDITH', source: Edith, desc: DEVICETEXTS.edith },
    { name: 'GRACE', source: Grace, desc: DEVICETEXTS.grace },
  ];

  const HAVA = productPanel[0]; // Access the first element
  const EDITH = productPanel[1]; // Access the second element
  const GRACE = productPanel[2]; // Access the third element

  const handleProductClick = (product) => { //using current product (not prev)
    
    setSelectedProduct(product); //set the product 
    setActivePanelVisible(true); //make conditions true 

    const productRef = refProducts.current[product.name];
    if (productRef && isMinimizedMode) { 

      let height = 560;
      if (product.name === "GRACE") { //current product for the argument 
        height = 600;
      }
      setProductHeight(height);

    }
    else if (productRef) {
      const height = productRef.offsetHeight;
      setProductHeight(height);
    }

    animateProduct(product);
  };

  const closePanel = () => {
    setActivePanelVisible(false);
  };

const animateProduct = (product) => {
  if (activePanelVisible) {
    switch (product.name) {
      case 'HAVA':
        return selectedProduct.name === 'HAVA' ? { transform: 'translateX(100%)', opacity: 0, transition: 'transform 0.5s, opacity 2s' } : { opacity: 0, transform: 'translateY(200%)', transition: 'opacity 1s, transform 2s' };
      case 'EDITH':
        return selectedProduct.name === 'EDITH' ? { transform: 'translateX(-300%)', opacity: 0, transition: 'transform 0.5s, opacity 2s' } : { opacity: 0, transform: 'translateY(200%)', transition: 'opacity 1s, transform 2s' };
      case 'GRACE':
        return selectedProduct.name === 'GRACE' ? { transform: 'translateX(-100%)', opacity: 0, transition: 'transform 0.5s, opacity 2s' } : { opacity: 0, transform: 'translateY(200%)', transition: 'opacity 1s, transform 2s' };
      default:
        return { opacity: 0 };
    }
  } else { //when active panel is not visible 
    return { 
      transform: 'initial', opacity: 1,
      transition: "transform 1s"
    };
  }
};

  return (
    <section id="products-section" className="products-section" maxW="100vw">
      <Container className="products-container" maxW="100%">
        <Heading center={true} title="PRODUCTS & SERVICES" />
         
        <Container maxW="100%" className={activePanelVisible ? 'panelSwitch' : ''}>
          <div className="inactiveProductPanel">
          

        {isMinimizedMode ? 

        // MOBILE MODE HERE 

            <SimpleGrid templateColumns='repeat(2, 1fr)' spacing="10px"
            templateRows='repeat(2, 1fr)'
            alignItems="center" 
            justifyItems="center"
            justifyContent="center"
            flex-direction="column"
            maxWidth="100%"
            minChildWidth='120px'>

              <GridItem colStart={1} rowStart={2}>
              <button>
                <OneProduct
                ref={(element) => {refProducts.current[EDITH.name] = element}} //assigns 
                name={EDITH.name}
                imgSource={EDITH.source}
                onClick={() => handleProductClick(EDITH)}
                isSelected={selectedProduct === EDITH}
                animateStyle={animateProduct(EDITH)}
                >
                </OneProduct>
              </button>
              </GridItem>


              <GridItem colSpan={2} rowStart={1}>
              <button>
                <OneProduct
                ref={(element) => {refProducts.current[HAVA.name] = element}} 
                name={HAVA.name}
                imgSource={HAVA.source}
                onClick={() => handleProductClick(HAVA)}
                isSelected={selectedProduct === HAVA}
                animateStyle={animateProduct(HAVA)}
                >
                </OneProduct>
              </button>

              </GridItem>


              <GridItem colStart={2} rowStart={2}>
              <button>
                <OneProduct
                ref={(element) => {refProducts.current[GRACE.name] = element}} 
                name={GRACE.name}
                imgSource={GRACE.source}
                onClick={() => handleProductClick(GRACE)}
                isSelected={selectedProduct === GRACE}
                animateStyle={animateProduct(GRACE)}
                >
                </OneProduct>
              </button>
              </GridItem>
            </SimpleGrid>



        
        : // DESKTOP MODE HERE 

       
            <Grid templateColumns="repeat(3, 1fr)" gap={1}>
              {productPanel.map((product, index) => (
                <button key={index}>
                  <OneProduct
                    ref={(element) => {refProducts.current[product.name] = element}} 
                    name={product.name}
                    imgSource={product.source}
                    onClick={() => handleProductClick(product)}
                    isSelected={selectedProduct === product}
                    animateStyle={animateProduct(product)}
                    
                  />
                </button>
              ))}
            </Grid>

        }
        </div>

          <ProductPanel
              id="product-panel"
              heading={selectedProduct.name}
              description={selectedProduct.desc}
              isOpen={activePanelVisible}
              onClick={closePanel}
              height = {productHeight}

          />
        </Container>
        <div className="ps-diag"></div>
      </Container>
    </section>
  );
};

export default PS;
import React, { useState, useEffect, useRef } from 'react';
import '../styles/PS.css';
import { Heading, ProductPanel, OneProduct } from './export';
import { Edith, Grace, Hava } from '../images/export';
import { Container, Grid, useMediaQuery, Spinner } from '@chakra-ui/react';
import { DEVICETEXTS } from '../constants/export';

const PS = () => {
  const [isMinimizedMode] = useMediaQuery('(max-width: 1000px)');

  const defaultProduct = { name: 'Default Product', desc: 'default desc' }; // Product when nothing is selected

  const [activePanelVisible, setActivePanelVisible] = useState(false); //toggles activity off or on 
  const [selectedProduct, setSelectedProduct] = useState(defaultProduct); //sets selectedProduct
  const [hideSpinner, setHideSpinner] = useState(true); //sets state on whether the spinner should be hidden or not 

  const refObjects = useRef([]); //establishes an object (array) storing the references to each object 

  const [productTop, setProductTop] = useState(0);

  const productPanel = [
    { name: 'HAVA', source: Hava, desc: DEVICETEXTS.hava },
    { name: 'EDITH', source: Edith, desc: DEVICETEXTS.edith },
    { name: 'GRACE', source: Grace, desc: DEVICETEXTS.grace },
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setActivePanelVisible(true);
    const productRef = refObjects.current[0];
    if (productRef) {
      const top = productRef.offsetTop;
      setProductTop(top);
    }
    animateProduct(product);
  };

  const closePanel = () => {
    setSelectedProduct(defaultProduct);
    setActivePanelVisible(false);
  };

const animateProduct = (product) => {
  if (activePanelVisible) {
    switch (product.name) {
      case 'HAVA':
        return selectedProduct.name === 'HAVA' ? { transform: 'translateX(100%)', transition: 'transform 1s' } : { opacity: 0 };
      case 'EDITH':
        return selectedProduct.name === 'EDITH' ? { transform: 'translateX(-100%)', transition: 'transform 1s' } : { opacity: 0 };
      case 'GRACE':
        return selectedProduct.name === 'GRACE' ? { transform: 'translateX(-200%)', transition: 'transform 1s' } : { opacity: 0 };
      default:
        return { opacity: 0 };
    }
  } else {
    return { transform: 'initial', opacity: 1 };
  }
};

const translatePanel = () => {
  if (activePanelVisible) {
    return {
      transform: `translateY(${-productTop}px)`,
      transition: 'transform 1s',
    };
  } else {
    return { transform: 'initial', opacity: 1 };
  }
};


  useEffect(() => {
    setHideSpinner(false);
    const timer = setTimeout(() => {
      setHideSpinner(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [selectedProduct]);

  return (
    <section id="products-section" className="products-section" maxW="100vw">
      <Container className="products-container" maxW="100%">
        <Heading center={true} title="PRODUCTS & SERVICES" />
        <Container maxW="100%" className={activePanelVisible ? 'panelSwitch' : ''}>
          <div className="inactiveProductPanel">
            {hideSpinner ? (
              <div>
                <Spinner opacity="0" size="xl" />
              </div>
            ) : (
              <div className={activePanelVisible ? 'showSpin' : 'hideSpin'}>
                <Spinner emptyColor="gray.100" size="xl" />
              </div>
            )}
            <Grid templateColumns="repeat(3, 1fr)" gap={1}>
              {productPanel.map((product, index) => (
                <button key={index}>
                  <OneProduct
                    ref={(element) => {refObjects.current[index] = element}} 
                    name={product.name}
                    imgSource={product.source}
                    onClick={() => handleProductClick(product)}
                    isSelected={selectedProduct === product}
                    animateStyle={animateProduct(product)}
                  />
                </button>
              ))}
            </Grid>
          </div>

          <ProductPanel
              id="product-panel"
              heading={selectedProduct.name}
              description={selectedProduct.desc}
              isOpen={activePanelVisible}
              onClick={closePanel}
              panelStyle={translatePanel()} // Pass the top position to the ProductPanel component
          />
        </Container>
        <div className="ps-diag"></div>
      </Container>
    </section>
  );
};

export default PS;
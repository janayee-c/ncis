import React, { forwardRef } from 'react';
import '../styles/OneProduct.css'
import { Container } from '@chakra-ui/react';

const OneProduct = forwardRef((props, ref) => {
    const { name, imgSource, animateStyle, isSelected, onClick, onHover } = props;
  
    return (
      <Container
        ref={ref} // Forward the ref to the Container component
        width="155px"
        height="300px"
        className={`product-container ${isSelected ? 'selected' : ''}`}
        style={animateStyle}
        onClick={onClick}
      >
        <img className="product-icon" src={imgSource} alt={name} />
        <h2 onMouseEnter={onHover} className="product-name">
          {name}
        </h2>
      </Container>
    );
  });
  

export default OneProduct;

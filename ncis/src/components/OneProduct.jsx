import React, { forwardRef } from 'react';
import '../styles/OneProduct.css';
import { Container } from '@chakra-ui/react';

const OneProduct = forwardRef((props, ref) => {
    const { name, imgSource, animateStyle, isSelected, onClick } = props;

    return (
      <Container
        ref={ref}
        width="155px"
        height="300px"
        className={`product-container ${isSelected ? 'selected' : ''}`}
        style={animateStyle}
        onClick={onClick}
      >
        <img className="product-icon" src={imgSource} alt={name} />
        <h2 className="product-name">
          {name}
        </h2>
      </Container>
    );
});

export default OneProduct;

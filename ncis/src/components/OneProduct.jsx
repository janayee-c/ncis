import React, { forwardRef } from 'react';
import '../styles/OneProduct.css';
import { Container, useMediaQuery } from '@chakra-ui/react';



const OneProduct = forwardRef((props, ref) => {
    const { name, imgSource, animateStyle, isSelected, onClick } = props;

    const [isMinimizedMode] = useMediaQuery('(max-width: 800px)');
    const [isMobileMode] = useMediaQuery('(max-width: 400px)');
    return (
      <Container
        ref={ref}
        width={isMinimizedMode ? (isMobileMode ? "225px" : "280px") : "225px"}
        height={isMinimizedMode ?  "200px" : "280px" }
        padding="15px"
        className={`product-container ${isSelected ? 'selected' : ''}`}
        style={animateStyle}
        onClick={onClick}
      >
        <img className="product-icon" src={imgSource} alt={name} />
        <h2 className="display-product-name">
          {name}
        </h2>
      </Container>
    );
});

export default OneProduct;

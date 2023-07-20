import React, { forwardRef, useState } from 'react';
import '../styles/OneProduct.css'
import { Container } from '@chakra-ui/react';

const OneProduct = forwardRef((props, ref) => {
    const { name, imgSource, animateStyle, isSelected, onClick} = props;

    const [mouseOn, setMouseOn] = useState(false);

    const onHover = () => {
      setMouseOn(true); 
    }

    const onHoverLeave = () => {
      setMouseOn(false); 
    }
  
  
    return (
      <Container
        ref={ref} // Forward the ref to the Container component
        width="155px"
        height="300px"
        className={`product-container ${isSelected ? 'selected' : ''}`}
        style={animateStyle}
        onClick={onClick}
      >
        <img onMouseEnter={onHover} onMouseLeave={onHoverLeave} className="product-icon" src={imgSource} alt={name} />
        <h2  className={`product-name ${mouseOn? 'animateName' : 'unanimateName'}`}>
          {name}
        </h2>
      </Container>
    );
  });
  

export default OneProduct;

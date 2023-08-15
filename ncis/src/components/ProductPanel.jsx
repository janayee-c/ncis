// product popup panel

import React, { useEffect, useState } from 'react';
import '../styles/ProductPanel.css';
import { Container } from '@chakra-ui/react';

const ProductPanel = (props) => {
    const { heading, description, isOpen, onClick, height } = props;
    const [cueTransition, setCueTransition] = useState(false); 

    useEffect(() => {
      if (isOpen) {
        const timer = setTimeout(() => {
          setCueTransition(true);
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        setCueTransition(false);
      }
    }, [isOpen]);

    const translateStyle = (delay = 0) => {
      if (isOpen && cueTransition) {
        return {
          transform: `translateY(${-height}px)`,
          transition: `transform ${delay}s`,
        };
      }
      return {
        transform: 'translateY(200px)',
        opacity: 1,
        transition: 'transform 1s',
      };
    };

    return (
      <Container className="panel-container">
        <h3 className="product-name" style={translateStyle(0.7)}>{heading}</h3>
        <p className="product-description" style={translateStyle(0.8)}>{description}</p>
        <p className="contact" style={translateStyle(0.75)}>
          <a href="mailto:info@ncis-tech.com">Contact Us</a> to learn more.
        </p>
        <button className="close-button" style={translateStyle(0.8)} onClick={onClick}>X</button>
      </Container>
    );
};

export default ProductPanel;

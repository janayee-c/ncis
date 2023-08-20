// product popup panel

import React, { useEffect, useState } from 'react';
import '../styles/ProductPanel.css';
import { Container, CloseButton } from '@chakra-ui/react';

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
        <h3 className="product-name" style={translateStyle(0.6)}>{heading}</h3>
        <p className="product-description" style={translateStyle(0.9)}>{description}</p>
        <p className="contact" style={translateStyle(0.7)}>
          <a href="mailto:info@ncis-tech.com">Contact Us</a> to learn more.
        </p>
        <div></div>
        <button className="close-button" 
                style={translateStyle(0.8)} 
                onClick={onClick}><CloseButton size="sm"
                marginLeft="-6px"></CloseButton></button>
      </Container>
    );
};

export default ProductPanel;

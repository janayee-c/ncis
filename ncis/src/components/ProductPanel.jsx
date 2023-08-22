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
      transform: `translateY(${height}px)`,
      opacity: 0, // Set text to transparent when transitioning
      transition: `transform ${delay + 1.5}s, background ${0.3}s, opacity ${0.15}s`, // Apply transitions
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
                style={translateStyle(0.7)} 
                onClick={onClick}>
                  <div class="close-container">
                      <div class="leftright"></div>
                      <div class="rightleft"></div>
                  </div>
                </button>
      </Container>
    );
};

export default ProductPanel;

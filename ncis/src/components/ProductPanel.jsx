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
      <Container className="panel-container" height="50px">
        <div className="product-header-container" style={translateStyle(0.6)}>
          <h3 className="product-name">{heading}</h3>
          <button className="close-button" onClick={onClick}>
            <div className="close-container">
              <div className="leftright"></div>
              <div className="rightleft"></div>
            </div>
          </button>
        </div>
        <p className={`${isOpen ? 'product-description' : 'minimized-description'}`} style={translateStyle(0.9)}>{description}</p>
        <p className="contact" style={translateStyle(0.7)}>
          <a href="mailto:info@ncis-tech.com">Contact Us</a> to learn more.
        </p>
        {/* ... */}
      </Container>
    );
};

export default ProductPanel;







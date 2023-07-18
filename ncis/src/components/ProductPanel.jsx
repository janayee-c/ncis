import React from 'react';
import '../styles/ProductPanel.css';
import { Container } from '@chakra-ui/react';

const ProductPanel = (props) => {
    const { heading, description, isOpen, onClick, panelStyle, height } = props;

      const translateHeading = () => {
        if (isOpen) {
          return {
            transform: `translateY(${-height}px)`,
            transition: 'transform 0.9s',
          };
        } else {
          return { 
            transform: 'initial',
            transform: 'translateY(200px)', opacity: 1, 
            transition: 'transform 1s',};
        }
      };

      const translateDesc = () => {
        if (isOpen) {
          return {
            transform: `translateY(${-height}px)`,
            transition: 'transform 0.8s',
          };
        } else {
          return { 
            transform: 'initial',
            transform: 'translateY(200px)', opacity: 1, 
            transition: 'transform 1s',};
        }
      };

      const translateContact = () => {
        if (isOpen) {
          return {
            transform: `translateY(${-height}px)`,
            transition: 'transform 0.9s',
          };
        } else {
          return { 
            transform: 'initial',
            transform: 'translateY(200px)', opacity: 1, 
            transition: 'transform 1s',};
        }
      };

  return (
    <Container className="panel-container" >
      <h3 className="product-name" style={translateHeading()}>{heading}</h3>
      <p className="product-description" style={translateDesc()}>{description}</p>
      <p className="contact" style={translateContact()}>
        <a href="mailto:info@ncis-tech.com">Contact Us</a> to learn more.
      </p>

      <button className="close-button" style={translateDesc()} onClick={onClick}>
        X
      </button>
    </Container>
  );
};

export default ProductPanel;

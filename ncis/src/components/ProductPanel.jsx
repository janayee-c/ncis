import React from 'react';
import '../styles/ProductPanel.css';
import { Container } from '@chakra-ui/react';

const ProductPanel = (props) => {
    const { heading, description, isOpen, onClick, panelStyle } = props;

  return (
    <Container className="panel-container" style={panelStyle}>
      <h3 className={`product-name ${isOpen ? 'visible' : 'invisible'}`}>{heading}</h3>
      <p className={`product-description ${isOpen ? 'visible' : 'invisible'}`}>{description}</p>
      <p className={`contact ${isOpen ? 'visible' : 'invisible'}`}>
        <a href="mailto:info@ncis-tech.com">Contact Us</a> to learn more.
      </p>

      <button className={`close-button ${isOpen ? 'visible' : 'invisible'}`} onClick={onClick}>
        X
      </button>
    </Container>
  );
};

export default ProductPanel;

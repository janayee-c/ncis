import { React, useEffect, useState } from 'react'
import '../styles/ProductPanel.css'
import { Container } from '@chakra-ui/react';

const ProductPanel = ({heading, description, isOpen, onClick}) => {

    return (
        <Container>
            <h3 className={ `product-name ${isOpen ? 'visible' : 'invisible'}`}>{heading}</h3>
            <p className={ `product-description ${isOpen ? 'visible' : 'invisible'}`}>{description}</p>
            <p className={ `contact ${isOpen ? 'visible' : 'invisible'}`}><a href="mailto:info@ncis-tech.com">Contact Us</a> to learn more.</p>

            <button className={ `close-button ${isOpen ? 'visible' : 'invisible'}`}onClick={onClick}>X</button> 
        </Container>
    );
}

export default ProductPanel;
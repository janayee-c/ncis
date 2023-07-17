import React from "react";
import { Box, Container } from "@chakra-ui/react";
import '../styles/OneProduct.css'


const OneProduct = (props) => {
    const {name, imgSource, animateStyle, isSelected, onClick, onHover } = props; 

    return (
        <Container width="155px" height="300px" className={`product-container" ${isSelected ? 'selected' : ''}`}
            style={animateStyle}
            onClick={onClick}>
            <img className="product-icon" src={imgSource}></img>
            <h2 onMouseEnter={onHover} className="product-name">{name}</h2>
        </Container>
    );
}

export default OneProduct;
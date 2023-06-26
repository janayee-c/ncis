import React from "react";
import { Box } from "@chakra-ui/react";
import '../styles/OneProduct.css'

import DEVICETEXTS from "../constants/texts"
import HAVA from "../images/export"


const OneProduct = (props) => {
    const {name, imgSource, row, col, desc, isSelected, onClick, onHover } = props; 

    const productStyle = {
        gridRow: row,
        gridColumn: col,
    }

    return (
        <Box width="140 px" className={`product-container" ${isSelected ? 'selected' : ''}`}
            style={productStyle}
            onClick={onClick}>
            <img className="product-icon" src={imgSource} objectFit={"cover"}></img>
            <h2 onMouseEnter={onHover} className="product-name">{name}</h2>
        </Box>
    );
}

export default OneProduct;
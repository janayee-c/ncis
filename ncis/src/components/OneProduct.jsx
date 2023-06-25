import React from "react";
import { Box } from "@chakra-ui/react";
import '../styles/OneProduct.css'

import DEVICETEXTS from "../constants/texts"
import HAVA from "../images/export"


const OneProduct = (props) => {
    const {name, imgSource, row, col } = props; 

    const productStyle = {
        gridRow: row,
        gridColumn: col,
    }

    return (
        <Box maxW="30%" className="product-container" style={productStyle}>
            <img className="product-icon" src={imgSource} objectFit={"cover"}></img>
            <h2 className="product-name">{name}</h2>
        </Box>
    );
}

export default OneProduct;
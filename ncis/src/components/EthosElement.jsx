import React, { useState, useEffect, useRef } from 'react';
import '../styles/EthosElement.css';
import { ReactComponent as CapacityBuilding } from '../images/CapacityBuilding.svg';

const EthosElement = (props) => {
    const { component : MyComponent, title } = props; //MyComponent is the reassigned variable to prop with name 'component'
    return (
        <div className="ethos-element-container">
            <div className="ethos-element-content">
            <MyComponent/> 
            <h2 className="caption">{title}</h2>
            </div>
        </div>
    )
}

export default EthosElement;


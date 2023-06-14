import React, { useState, useEffect, useRef } from "react";
import "../styles/EthosElement.css";

const EthosElement = (props) => {
  const { component: EthosPicture, title, id } = props; //MyComponent is the reassigned variable to prop with name 'component'
  return (
    <div className="ethos-element-container">
      <div className="ethos-element-content">
        <EthosPicture style={id === 0 ? {width: '18vh', height: '8.80vh'} : {}}/>
        <h2 className="caption">{title}</h2>
      </div>
    </div>
  );
};

export default EthosElement;

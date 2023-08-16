import React from "react";
import "../styles/EthosElement.css";

const EthosElement = ({ source, title, id, startAppear }) => {
  const isEthicalTechnology = id === 0;

  return (
    <div className="ethos-element-container">
      <div className={isEthicalTechnology ? "et-content" : "ethos-element-content"}>
        <img className={startAppear ? (isEthicalTechnology ? "et-img" : "") : "invisible"} src={source} alt={title} />
        <h2 className={startAppear ? "caption" : "invisible"}>{title}</h2>
      </div>
    </div>
  );
};

export default EthosElement;

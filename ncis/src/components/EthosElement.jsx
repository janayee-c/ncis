import React from "react";
import "../styles/EthosElement.css";

const EthosElement = ({ source, title, id, startAppear }) => {
  const isEthicalTechnology = id === 0;

  return (
    <div className={"ethos-element-container display-element"}>
      <div className={isEthicalTechnology ? "et-content" : "ethos-element-content"}>
        <img className={isEthicalTechnology ? "et-img" : ""}src={source} alt={title} />
        <h2 className={"caption"}>{title}</h2>
      </div>
    </div>
  );
};

export default EthosElement;

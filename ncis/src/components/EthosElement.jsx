import React from "react";
import "../styles/EthosElement.css";

const EthosElement = ({ source, title, id}) => {
  const isEthicalTechnology = id === 0;

  return (
    <div className={"ethos-element-container"}>
      <div className={isEthicalTechnology ? "et-content" : "ethos-element-content"}>
        <img className={isEthicalTechnology ? "et-img" : "ethos-element-image"}src={source} alt={title} />
        <h2 className={"caption"}>{title}</h2>
      </div>
    </div>
  );
};

export default EthosElement;

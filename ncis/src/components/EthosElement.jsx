import React from "react";
import "../styles/EthosElement.css";

const EthosElement = (props) => {
  const { source, title, id } = props;
  const etElementStyle = (id === 0)  ? "et-content" : "ethos-element-content" ; //styles specific for Ethical Technology content (img & caption)
  const etImageStyle = (id === 0)  ? "et-img" : "" ;

  return (
    <div className="ethos-element-container">
      <div className={etElementStyle}>
        <img className={etImageStyle} src={source}></img>
        <h2 className="caption">{title}</h2>
      </div>
    </div>
  );
};

export default EthosElement;
import React from "react";
import "../styles/EthosElement.css";

const EthosElement = (props) => {
  const { component: EthosPicture, title, id } = props;
  const etContainerStyle = id === 0 ? { marginTop: "-12px", alignItems:"center", justifyContent:"center"} : {}; //styles specific for Ethical Technology component
  const etImageStyle = (id === 0)  ? { scale:"80%", marginBottom:"-5px"} : {}; //styles specific for Ethical Technology component

  return (
    <div className="ethos-element-container" style={etContainerStyle}>
      <div className="ethos-element-content">
        <EthosPicture style={etImageStyle}/>
        <h2 className="caption">{title}</h2>
      </div>
    </div>
  );
};

export default EthosElement;
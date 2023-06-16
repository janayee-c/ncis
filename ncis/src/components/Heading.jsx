import React from 'react'
import '../styles/Heading.css'

const Heading = (props) => {
    return (
        <div className={`web-heading ${props.center ? 'centered' : ''}`}> <img className="triangle" src={require('../images/triangle.png')}/> {props.title}</div>
    )
  }
  
  export default Heading
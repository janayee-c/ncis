import React from 'react'
import '../styles/Heading.css'

const Heading = (props) => {
    return (
        <div class="web-heading"> <img class="triangle" src={require('../images/triangle.png')}/> {props.title}</div>
    )
  }
  
  export default Heading
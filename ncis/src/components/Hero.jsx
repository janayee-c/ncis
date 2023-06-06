import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className="hero">
    <div className="bg" >
        <img className="ref" id="cube" src={require('../images/cube.png')} />
        <div className="content">
        </div>
        <a className="ref" href="#about"><p className="learn">Learn more <i className="fa-solid fa-angles-down"></i></p></a>
    </div>
</div>

  )
}

export default Hero
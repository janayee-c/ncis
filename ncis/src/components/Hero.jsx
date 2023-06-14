import React, { useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  useEffect(() => {
    function scrollAnimate() {
      var scrollPosition = window.scrollY || window.pageYOffset;
      var cubeElement = document.getElementById('cube');
      cubeElement.style.transform = 'translateY(' + (-scrollPosition / 10) + 'px)';
    }

    window.addEventListener('scroll', scrollAnimate())

    scrollAnimate();
    
    return () => {
      window.removeEventListener('scroll', scrollAnimate);
    };
  }, []); //empty dependencies runs only on initial mount 

  return (
    <div className="hero">
      <div className="bg">
        <img  id="cube" src={require('../images/cube.png')} alt="Cube" />
      </div>
    </div>
  );
};

export default Hero;

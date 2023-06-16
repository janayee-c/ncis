import React, { useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const scrollAnimate = () => {
    var scrollPosition = window.scrollY || window.pageYOffset;
    var cubeElement = document.getElementById('cube');
    cubeElement.style.transform = 'translateY(' + (-scrollPosition / 10) + 'px)'; 
  };

  /* scrollAnimate must be defined before useEffect() or else a new reference to scrollAnimate is defined 
  each time and the original is not unmounted */

  useEffect(() => {
    window.addEventListener('scroll', scrollAnimate);

    return () => {
      window.removeEventListener('scroll', scrollAnimate);
    };
  }, []);

  return (
    <div className="hero">
      <div className="bg">
        <img id="cube" src={require('../images/cube.png')} alt="Cube" />
      </div>
    </div>
  );
};

export default Hero;

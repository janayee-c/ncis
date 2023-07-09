import { Container } from '@chakra-ui/react';
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
<section id="hero-section" className="hero-section">
  <div className="cubic-container">
    <img id="cube" src={require('../images/cube.png')} alt="Cube" />
  </div>
  <div className="hero-diag"></div>
</section>
  );
};

export default Hero;

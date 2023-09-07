import { Container, useMediaQuery } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [isMinimizedMode] = useState(useMediaQuery('max-width:900px'));
  const [scrollDirection, setScrollDirection] = useState('down');
  const [prevScrollY, setPrevScrollY] = useState(0);

  const scrollAnimate = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const cubeElement = document.getElementById('cube');

    if (isMinimizedMode) {
      if (scrollY > prevScrollY) {
        // Scrolling down, translate the cube by 20px
        cubeElement.style.transform = 'translateY(-80px)';
        setScrollDirection('down');
      } else {
        // Scrolling up, reset the cube to its normal position
        cubeElement.style.transform = 'translateY(0)';
        setScrollDirection('up');
      }
    } else {
      // In non-minimized mode, apply your original transformation
      cubeElement.style.transform = 'translateY(' + (-scrollY / 4) + 'px)';
    }

    // Update the previous scroll position
    setPrevScrollY(scrollY);
  };

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

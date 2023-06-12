import React, { useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  useEffect(() => {
    function scrollAnimate() {
      window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY || window.pageYOffset;
        
        var cubeElement = document.getElementById('cube');
        var refElement = document.querySelector('.ref');
        
        cubeElement.style.transform = 'translateY(' + (-scrollPosition / 10) + 'px)';
        refElement.style.transform = 'translateY(' + (-scrollPosition / 10) + 'px)';
      });
    }

    scrollAnimate();
    
    return () => {
      window.removeEventListener('scroll', scrollAnimate);
    };
  }, []); //empty dependencies runs only on initial mount 

  return (
    <div className="hero">
      <div className="bg">
        <img className="ref" id="cube" src={require('../images/cube.png')} alt="Cube" />
        <div className="content"></div>
        <a className="ref welcome" href="#about"> 
        <i className="fa-solid fa-angles-down"></i>
        </a>
      </div>
    </div>
  );
};

export default Hero;

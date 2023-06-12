import React, { useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  useEffect(() => {
    function resizeCube() {
      var cubeElement = document.getElementById('cube');
      var windowHeight = window.innerHeight;
      var cubeSize = windowHeight / 1.45; // Adjust the size ratio as needed
      
      cubeElement.style.width = cubeSize + 'px';
      cubeElement.style.height = cubeSize + 'px';
    }
    
    function scrollAnimate() {
      window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY || window.pageYOffset;
        
        var cubeElement = document.getElementById('cube');
        var refElement = document.querySelector('.ref');
        
        cubeElement.style.transform = 'translateY(' + (-scrollPosition / 20) + 'px)';
        refElement.style.transform = 'translateY(' + (-scrollPosition / 10) + 'px)';
      });
    }

    window.addEventListener('resize', resizeCube);
    
    resizeCube();
    scrollAnimate();
    
    

    return () => {
      window.removeEventListener('scroll', scrollAnimate);
    };
  }, []);

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

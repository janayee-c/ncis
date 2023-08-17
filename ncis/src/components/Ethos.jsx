import React, { useRef, useEffect, useState } from 'react';
import '../styles/Ethos.css';

/* Ethos Components */
import { Ethical, Capacity, Ocean, Transparency, Information } from '../images/export';
import { Heading, EthosElement } from '../components/export';
import { useInView } from 'react-intersection-observer';

import { Container, useMediaQuery } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Ethos = () => {
  const sliderRef = useRef(null);
  const ethosRef = useRef(); 
  const [visibleProducts, setVisibleProducts] = useState(0);


  const [isMedium] = useMediaQuery('(max-width: 1200px)');
  const [isSmall] = useMediaQuery('(max-width: 900px)');

  const ethosSources = [
    { title: "ETHICAL TECHNOLOGY", source: Ethical },
    { title: "OCEAN GOVERNANCE", source: Ocean },
    { title: "TRANSPARENCY", source: Transparency },
    { title: "CAPACITY", source: Capacity },
    { title: "INFORMATION AT HAND", source: Information }
  ];

  let slidesToShowValue = 5;
  let slidesToScrollValue = 5;
  
  if (isMedium) {
    slidesToShowValue = isSmall ? 1 : 3;
    slidesToScrollValue = isSmall ? 1 : 3;
  }

  const settings = {
    dots: false,
    infinite: isMedium,
    speed: 3000,
    slidesToShow: slidesToShowValue,
    slidesToScroll: slidesToScrollValue,
    swipeToSlide: true,
    draggable: true,
    autoplay: isMedium,
    autoplaySpeed: 2000
  };
  //observer stuff 

  useEffect(() => {
    // callback function that toggles classes
    const callback = (entries, index) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            console.log('Element is intersecting:', entry.isIntersecting);
            entry.target.classList.toggle('hide-element', false);
            entry.target.classList.toggle('display-element', true);
          }, 1000);
        } else {
          entry.target.classList.toggle('hide-element', true);
          entry.target.classList.toggle('display-element', false);
        }
      });
    };

    // Options
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const ethosElements = document.querySelectorAll('.hide-element');
    const observer = new IntersectionObserver(callback, options);

    // Observe each ethos element
    ethosElements.forEach((el) => {
      observer.observe(el);
    });

    // Remove observer after each one 
    return () => {
      ethosElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  
  return (
    <section id="ethos-section" className="ethos-section" ref={ethosRef}>
      <Container className="econtainer" maxW="100%">
        <Heading id="ethos-heading" title="ETHOS" center />
        <div className="ethos-slider-container"> 
          <Slider className="intersection-o" {...settings} ref={sliderRef}>
            {ethosSources.map((element, index) => (
              <div className="hide-element"  style={{transitionDelay:`${index * 0.5}s`}} key={index}>
                <EthosElement 
                  id={index} 
                  source={element.source} 
                  title={element.title}>   
                  </EthosElement>
              </div>
            ))}
          </Slider>
        </div>
        <div className="ethos-diag"></div>
      </Container>
    </section>
  );
};

export default Ethos;

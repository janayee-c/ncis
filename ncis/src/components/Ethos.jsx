import React, { useRef, useState } from 'react';
import '../styles/Ethos.css';
import { InView } from "react-intersection-observer";

/* Ethos Components */
import { Ethical, Capacity, Ocean, Transparency, Information } from '../images/export';
import { Heading, EthosElement } from '../components/export';
import { Container, useMediaQuery } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Ethos = () => {
  const sliderRef = useRef(null);
  const [isMedium] = useMediaQuery('(max-width: 1200px)')
  const [isSmall] = useMediaQuery('(max-width: 900px)')

  const ethosSources = [
    {title: "ETHICAL TECHNOLOGY", source: Ethical}, //properties of each element
    {title: "OCEAN GOVERNANCE", source: Ocean},
    {title: "TRANSPARENCY", source: Transparency},
    {title: "CAPACITY", source: Capacity},
    {title: "INFORMATION AT HAND", source: Information}
  ]
  const settings = { //for slider
    dots: false,
    infinite: isMedium, // infinite carousel only when in mobile mode
    speed: 3000,
    slidesToShow: isMedium ? ( isSmall ? 1 : 3 ) : 5, // Show 3 elements on mobile, 5 elements on larger screens
    slidesToScroll: isMedium ? ( isSmall ? 1 :3) : 5,
    swipeToSlide: true,
    draggable: true,
    autoplay: isMedium,
    autoplaySpeed: 5000

  };
  
  return (
    <section id="ethos-section">
      <Container className="econtainer" maxW="100%">
      <Heading id="ethos-heading" title="ETHOS" center={true} />
        <div className="slider-container" > 
          <Slider  {...settings} ref={sliderRef}>
            {ethosSources.map((element, index) => (
              <div>
                <EthosElement id={index} source={element.source} title={element.title}></EthosElement>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Ethos;

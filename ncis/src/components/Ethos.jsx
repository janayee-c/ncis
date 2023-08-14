import React, { useRef } from 'react';
import '../styles/Ethos.css';

/* Ethos Components */
import { Ethical, Capacity, Ocean, Transparency, Information } from '../images/export';
import { Heading, EthosElement } from '../components/export';

import { Container, useMediaQuery } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Ethos = () => {
  const sliderRef = useRef(null);
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
  
  return (
    <section id="ethos-section" className="ethos-section">
      <Container className="econtainer" maxW="100%">
        <Heading id="ethos-heading" title="ETHOS" center />
        <div className="ethos-slider-container"> 
          <Slider {...settings} ref={sliderRef}>
            {ethosSources.map((element, index) => (
              <div key={index}>
                <EthosElement id={index} source={element.source} title={element.title} />
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

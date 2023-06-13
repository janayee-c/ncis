import React, { useState, useEffect, useRef } from 'react';
import '../styles/Ethos.css';

/* Ethos Components */
import { ReactComponent as CapacityBuilding } from '../images/CapacityBuilding.svg';
import { ReactComponent as EthicalTechnology } from '../images/EthicalTechnology.svg';
import { ReactComponent as InformationAtHand } from '../images/InformationAtHand.svg';
import { ReactComponent as OceanGovernance } from '../images/OceanGovernance.svg';
import { ReactComponent as Transparency } from '../images/Transparency.svg';

import { Heading, EthosElement } from '../components/export';
import { Container } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Ethos = () => {
  const [isMobile, setIsMobile] = useState(false); //initial state of isMobile is false
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1400); // sets object isMobile as true or false for state
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check for window 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: false,

    infinite: isMobile, // infinite carousel only when in mobile mode 
    speed: 500,
    slidesToShow: isMobile ? 3 : 5, // Show 3 elements on mobile, 1 element on larger screens
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
  };

  return (
    <section id="ethos">
      <Container className="econtainer" maxW="100%">
        <Heading title="ETHOS" />
        <div
          className="slider-container"
        >
          <Slider {...settings} ref={sliderRef}>
            <div>
            <EthosElement component={EthicalTechnology} title="ETHICAL TECHNOLOGY" className="ethical-tech"></EthosElement>
            </div>
            <div>
            <EthosElement component={OceanGovernance} title="OCEAN GOVERNANCE" ></EthosElement>
            </div>
            <div>
            <EthosElement component={Transparency} title="TRANSPARENCY" ></EthosElement>
            </div>
            <div>
            <EthosElement component={CapacityBuilding} title="CAPACITY BUILDING" ></EthosElement>
            </div>
            <div>
            <EthosElement component={InformationAtHand} title="INFORMATION AT HAND" ></EthosElement>
            </div>
          </Slider>

        </div>
      </Container>
    </section>
  );
};

export default Ethos;
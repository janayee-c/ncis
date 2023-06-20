import React, { useRef } from 'react';
import '../styles/Ethos.css';

/* Ethos Components */
import { ReactComponent as CapacityBuilding } from '../images/CapacityBuilding.svg';
import { ReactComponent as EthicalTechnology } from '../images/EthicalTechnology.svg';
import { ReactComponent as InformationAtHand } from '../images/InformationAtHand.svg';
import { ReactComponent as OceanGovernance } from '../images/OceanGovernance.svg';
import { ReactComponent as Transparency } from '../images/Transparency.svg';

import { Heading, EthosElement } from '../components/export';
import { Container, useMediaQuery } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Ethos = () => {
  const sliderRef = useRef(null);
  const [isMedium] = useMediaQuery('(max-width: 1200px)')
  const [isSmall] = useMediaQuery('(max-width: 750px)')

  const ethosElements = [
    { component: EthicalTechnology, title: 'ETHICAL TECHNOLOGY' },
    { component: OceanGovernance, title: 'OCEAN GOVERNANCE' },
    { component: Transparency, title: 'TRANSPARENCY' },
    { component: CapacityBuilding, title: 'CAPACITY BUILDING' },
    { component: InformationAtHand, title: 'INFORMATION AT HAND' },
  ];

  const settings = {
    dots: false,
    infinite: isMedium, // infinite carousel only when in mobile mode
    speed: 500,
    slidesToShow: isMedium ? ( isSmall ? 1 : 3 ) : 5, // Show 3 elements on mobile, 5 elements on larger screens
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
  };
  
  return (
    <section id="ethos-section">
      <Container className="econtainer" maxW="100%" padding="5%">
      <Heading id="ethos-heading" title="ETHOS" center={true} />
        <div className="slider-container" >
          <Slider  {...settings} ref={sliderRef}>
            {ethosElements.map((element, index) => (
              <div>
                <EthosElement id={index} component={element.component} title={element.title}></EthosElement>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Ethos;

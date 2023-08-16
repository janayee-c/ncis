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

  const { ref, inView } = useInView ({
    threshold: 1,
    root: null,
    rootMargin:"0px"
  });

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => {
        setVisibleProducts(visibleProducts + 1);
      }, 250); 

      return () => clearTimeout(timeout); 
    }
  }, [inView, visibleProducts]); 


  //end of observer stuff 

  
  return (
    <section id="ethos-section" className="ethos-section" ref={ref} inView={inView}>
      <Container className="econtainer" maxW="100%">
        <Heading id="ethos-heading" title="ETHOS" center />
        <div className="ethos-slider-container"> 
          <Slider {...settings} ref={sliderRef}>
            {ethosSources.map((element, index) => (
              <div key={index}>
                <EthosElement 
                
                  id={index} 
                  source={element.source} 
                  title={element.title} 
                  startAppear={ visibleProducts > index }>
                    
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

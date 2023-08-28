import React, { useRef, useEffect, useState } from 'react';
import '../styles/Ethos.css';
import { Container, useMediaQuery } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Heading, EthosElement } from '../components/export';
import { Ethical, Capacity, Ocean, Transparency, Information } from '../images/export';

const Ethos = () => {
  const sliderRef = useRef(null);
  const [visibleProducts, setVisibleProducts] = useState(0);

  const [isMedium] = useMediaQuery('(max-width: 1200px)');
  const [isSmall] = useMediaQuery('(max-width: 600px)');

  const ethosSources = [
    { title: "ETHICAL TECHNOLOGY", source: Ethical },
    { title: "OCEAN GOVERNANCE", source: Ocean },
    { title: "TRANSPARENCY", source: Transparency },
    { title: "CAPACITY BUILDING", source: Capacity },
    { title: "INFORMATION AT HAND", source: Information }
  ];

  let slidesToShowValue = 5;
  let slidesToScrollValue = 5;

  if (isMedium) {
    slidesToShowValue = isSmall ? 1 : 3;
    slidesToScrollValue = 1;
  }

  const settings = {
    dots: false,
    infinite: isMedium || isSmall,
    speed: 2500,
    slidesToShow: slidesToShowValue,
    slidesToScroll: slidesToScrollValue,
    swipeToSlide: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000
  };

  // Observer stuff
  const callback = (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const timeout = setTimeout(() => {
          setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 1);
        }, (index + 1) * 150);
        return () => clearTimeout(timeout);
      }
    });
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: isSmall ? 0 : 1.0
  };

  useEffect(() => {
    const ethosElement = document.querySelectorAll(".ethical-element");
    const observer = new IntersectionObserver(callback, options);

    if (sliderRef.current) {
      ethosElement.forEach((el) => {
        observer.observe(el);
      });
    }

    return () => {
      ethosElement.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="ethos-section" className="ethos-section">
      <Container className="econtainer" maxW="100%">
        <Heading id="ethos-heading" title="ETHOS" center />
        <div className="ethos-slider-container">
          <Slider {...settings} ref={sliderRef}>
            {ethosSources.map((element, index) => (
              <div
                key={index}
                className={`${
                  (isSmall || isMedium) ? 'always-display' : `ethical-element ${index <= visibleProducts ? 'display-element' : 'hide-element'}`
                }`}
              >
                <EthosElement
                  id={index}
                  className="ethical-element"
                  source={element.source}
                  title={element.title}
                />
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

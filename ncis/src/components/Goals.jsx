import React, { useEffect, useState } from 'react';
import '../styles/Goals.css';
import { Heading } from '../components/export';
import { Container, useMediaQuery } from '@chakra-ui/react';
import { mobileGoals, desktopGoals } from '../images/export';

const Goals = () => {
  const [isDesktopMode] = useMediaQuery('(min-width: 800px)');
  const [image, setImage] = useState(null);
  const [container, setContainer] = useState(null);

  useEffect(() => {
    const chooseImage = () => {
      if (isDesktopMode) {
        setImage(desktopGoals);
      } else {
        setImage(mobileGoals);
      }
    };

    chooseImage();
  }, [isDesktopMode]);

  return (
    <section id="goals-section" className="goals-section">
      <Container maxW="100%">
        <Heading center={true} title="GOALS" />
        <div className="img-container">
          <img src={image} alt="goals" className={isDesktopMode ? 'desktop-image' : 'mobile-image'} />
        </div>
        <div className="goals-diag"></div>
      </Container>
    </section>
  );
};

export default Goals;

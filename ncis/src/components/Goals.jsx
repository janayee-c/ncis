import React from 'react';
import '../styles/Goals.css';
import { Heading } from '../components/export';
import { Container, useMediaQuery } from '@chakra-ui/react';
import { mobileGoals, desktopGoals } from '../images/export';

const Goals = () => {
  const [isDesktopMode] = useMediaQuery('(min-width: 700px) or (orientation:landscape)');

  function chooseImage() {
    if (isDesktopMode) {
      return desktopGoals;
    } else {
      return mobileGoals;
    }
  }

  return (
    <section id="goals-section" className="goals-section">
  
      <Container maxW="100%" className={`goals-container ${isDesktopMode ? 'desktop-mode' : 'mobile-mode'}`}>
        <Heading center={true} title="GOALS"/>
        <div className="img-container">
          <img
            src={chooseImage()}
            alt="goals"
            className={isDesktopMode ? 'desktop-image' : 'mobile-image'}
          />
        </div>
      </Container>
      <div className="goals-diag"></div>

    </section>
  );
};

export default Goals;
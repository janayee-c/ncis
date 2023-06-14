import React from 'react';
import '../styles/Goals.css';
import { Heading } from '../components/export';
import { Container, useMediaQuery } from '@chakra-ui/react';

const Goals = () => {
  const [isDesktopMode] = useMediaQuery('(min-width: 1200px)');
  const desktopGoals = require('../images/ncis-goals-diagram.png');
  const mobileGoals = require('../images/goals-diagram_iphone.png');

  function chooseImage() {
    if (isDesktopMode) {
      return desktopGoals;
    } else {
      return mobileGoals;
    }
  }

  return (
    <section id="goals" width="100%">
      <Container maxW="100%" className={`goal-container ${isDesktopMode ? 'desktop-mode' : 'mobile-mode'}`}>
        <Heading title="GOALS"/>
        <div className="img-container">
          <img
            src={chooseImage()}
            alt="goals"
            className={isDesktopMode ? 'desktop-image' : 'mobile-image'}
          />
        </div>
      </Container>
    </section>
  );
};

export default Goals;
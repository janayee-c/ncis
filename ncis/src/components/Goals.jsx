import React from 'react';
import '../styles/Goals.css';
import { Heading } from '../components/export';
import { Container, useMediaQuery } from '@chakra-ui/react';

const Goals = () => {
  const [isDesktopMode] = useMediaQuery('(min-width: 990px)');
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
    <section id="goals">
      <Container className="gcontainer" height="50vh" maxWidth="100%">
        <Heading title="GOALS" />
        <div className="goal-container">
          <img
            src={chooseImage()}
            alt="goals"
            className={`goal-image ${isDesktopMode ? 'desktop-image' : 'mobile-image'}`}
          />
        </div>
      </Container>
    </section>
  );
};

export default Goals;
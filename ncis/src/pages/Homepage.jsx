import React, { useState } from 'react';
import '../styles/Homepage.css';
import { About, Contact, Ethos, Events, Execs, Goals, Hero, Navbar, PS, Pubs, SplashScreen } from '../components/export';
import { useMediaQuery } from '@chakra-ui/react';

function Homepage() {
  const [isMobileMode] = useMediaQuery('(max-width: 800px)');
  const [splashScreenEnded, setSplashScreenEnded] = useState(false);

  const handleSplashScreenEnd = () => {
    setSplashScreenEnded(true);
  };

  return (
    <>
      {splashScreenEnded ? (
        <div className="homePage-container">
          <Navbar />
          <Hero />
          <Ethos />
          <About />
          <Goals />
          <PS />
          <Execs />
          <Pubs />
          <Events />
          <Contact />
        </div>
      ) : (
        <SplashScreen onVideoEnd={handleSplashScreenEnd} />
      )}
    </>
  );
}

export default Homepage;

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
      <div className="homePage-container">
        {/* Render SplashScreen with the handleSplashScreenEnd callback */}
        <SplashScreen onVideoEnd={handleSplashScreenEnd} />

        {/* Render other components only when splashScreenEnded is true */}
        {splashScreenEnded && (
          <>
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
          </>
        )}
      </div>
    </>
  );
}

export default Homepage;

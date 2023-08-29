import React, { useState, useEffect } from 'react';
import { Splash } from '../images/export';
import '../styles/SplashScreen.css';

const SplashScreen = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); // State for error message

  const handlePlayButton = () => {
    const videoElement = document.getElementById('splashVideo');
    if (videoElement) {
      videoElement.play().catch(err => {
        console.error('Unable to play video:', err);
      });
    }
  };

  useEffect(() => {
    const videoElement = document.getElementById('splashVideo');
    const playPromise = videoElement.play();

    playPromise
      .then(() => {
        if (videoElement.paused) {
          setErrorMessage('Video playback started but was immediately paused.');
          handlePlayButton(); // Trigger play button 
        }
      })
      .catch(error => {
        console.error('Video autoplay error:', error);
        setErrorMessage('Play to Access Site');
        handlePlayButton(); // Trigger play button
      });
  }, []);

  const handleVideoEnded = () => {
    setVideoEnded(true);
  };

  return (
    <div className={`splashscreen ${videoEnded ? 'hidden' : ''}`}>
      
      {errorMessage && (
        <div className="error-message">
          <div className="centered-play-button" onClick={handlePlayButton}>
            Play Video
          </div>
        </div>
      )}
      
      <video
        id="splashVideo"
        autoPlay
        muted
        onEnded={handleVideoEnded}
        width="500"
        height="500"
        webkit-playsinline
        playsInline
      >
        <source src={Splash} type="video/mp4" />
        Your browser does not support videos.
      </video>
    </div>
  );
};

export default SplashScreen;

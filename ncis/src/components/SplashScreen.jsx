import React, { useState, useEffect } from 'react';
import { Splash } from '../images/export';
import '../styles/SplashScreen.css';
import VideoErrorBoundary from './VideoErrorBoundary';
import VideoPausedError from './VideoPausedError';

const SplashScreen = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); // State for error message

  useEffect(() => {
    const videoElement = document.getElementById('splashVideo');
    const playPromise = videoElement.play();

    playPromise
      .then(() => {
        if (videoElement.paused) {
          setErrorMessage('Video playback started but was immediately paused.');
        }
      })
      .catch(error => {
        console.error('Video autoplay error:', error);
        setErrorMessage('Error while trying to play the video.');
      });
  }, []);

  const handleVideoEnded = () => {
    setVideoEnded(true);
  };

  return (
    <VideoErrorBoundary>
      <div className={`splashscreen ${videoEnded ? 'hidden' : ''}`}>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
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
    </VideoErrorBoundary>
  );
};

export default SplashScreen;

import React, { useState, useEffect } from 'react';
import { Splash } from '../images/export'
import '../styles/SplashScreen.css'
import VideoErrorBoundary from './VideoErrorBoundary'; 
import VideoPausedError from './VideoPausedError'; 

const SplashScreen = () => {
  const [videoEnded, setVideoEnded] = useState(false);


  useEffect(() => {
    const videoElement = document.getElementById('splashVideo');
    const playPromise = videoElement.play();

    playPromise
      .then(() => {
        // Video started playing, check if it's paused
        if (videoElement.paused) {
          throw new VideoPausedError('Video is paused');
        }
      })
      .catch(error => {
        // Handle the error, which could be due to autoplay restrictions
        console.error('Video autoplay error:', error);
      });
  }, []);

  const handleVideoEnded = () => {
    setVideoEnded(true);
  };

  return (
    <VideoErrorBoundary>
    <div className={`splashscreen ${videoEnded ? 'hidden' : ''}`}>
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
}

export default SplashScreen;
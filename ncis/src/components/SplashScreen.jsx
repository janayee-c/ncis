import React, { useState } from 'react';
import { Splash } from '../images/export'
import '../styles/SplashScreen.css'
import VideoErrorBoundary from './VideoErrorBoundary'; 

const SplashScreen = () => {
  const [videoEnded, setVideoEnded] = useState(false);

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
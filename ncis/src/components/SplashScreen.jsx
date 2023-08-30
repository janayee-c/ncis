import React, { useState, useEffect } from 'react';
import { Splash } from '../images/export';
import '../styles/SplashScreen.css';

const SplashScreen = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // Track playing state
  const [errorMessage, setErrorMessage] = useState(null); // State for error message

  const handlePlayButton = () => {
    const videoElement = document.getElementById('splashVideo');
    if (videoElement) {
      videoElement.play().catch(err => {
        console.error('Unable to play video:', err);
      });
      setIsPlaying(true);
    }
  };

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
        setErrorMessage('Play to Access Site');
      });
  }, []);

  const handleVideoEnded = () => {
    setVideoEnded(true);
    setTimeout(() => {
      setisPlaying(false);
    }, 4000); // 2000 milliseconds (2 seconds)
    
  };

  return (
    <div className={`splashscreen ${videoEnded ? 'hidden' : ''}`}>
      {errorMessage && (
        <div className={`centered-play-button ${isPlaying ? 'hide-play' : ''}`} onClick={handlePlayButton}>
          ENTER
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
        disablePictureInPicture
        disableRemotePlayback
      >
        <source src={Splash} type="video/mp4" />
        Your browser does not support videos.
      </video>
    </div>
  );
};

export default SplashScreen;

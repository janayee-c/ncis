import React, { useState, useEffect } from 'react';
import { Splash } from '../images/export';
import '../styles/SplashScreen.css';
import { NCISLoadingImage } from '../images/export';

const SplashScreen = ({ onVideoEnd }) => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [showPicture, setShowPicture] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null); // State for error message

  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  useEffect(() => {
    const videoElement = document.getElementById('splashVideo');
    const playPromise = videoElement.play();

    playPromise
      .then(() => {
        if (videoElement.paused) {
          setErrorMessage('Video playback started but was immediately paused.');
        }
      })
      .catch((error) => {
        console.error('Video autoplay error:', error);
        setErrorMessage('Play to Access Site');
      });
  }, []);

  useEffect(() => {
    // After 2 seconds, hide the picture
    const timer = setTimeout(() => {
      onVideoEnd();
      setShowPicture(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [onVideoEnd]);

  const handleVideoEnded = () => {
    setVideoEnded(true);
    onVideoEnd();
  };

  return (
    <>
      {errorMessage ? (
        <div className={`splashscreen ${showPicture ? '' : 'hidden'}`}>
          {showPicture && (
            <img
              src={NCISLoadingImage}
              alt="Placeholder"
              className={`ncisloading ${showPicture ? 'fade-out' : ''}`}
            />
          )}
        </div>
      ) : (
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
            disablePictureInPicture
            disableRemotePlayback
          >
            <source src={Splash} type="video/mp4" />
            Your browser does not support videos.
          </video>
        </div>
      )}
    </>
  );
};

export default SplashScreen;

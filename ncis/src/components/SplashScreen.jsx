import React, { useState, useEffect } from 'react';
import { Splash } from '../images/export';
import '../styles/SplashScreen.css';
import { NCISLoadingImage, Logo } from '../images/export';

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

    const playVideo = () => {
      videoElement.play().catch((error) => {
        console.error('Video autoplay error:', error);
        setErrorMessage('Play to Access Site');
      });
    };

    // Check if the video element is ready (loadedmetadata event) before attempting to play
    videoElement.addEventListener('loadedmetadata', () => {
      // Delay autoplay by 2 seconds
      setTimeout(() => {
        playVideo();
      }, 800);
    });

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      videoElement.removeEventListener('loadedmetadata', playVideo);
    };
  }, []);

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        onVideoEnd();
        setShowPicture(false);
      }, 1500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [errorMessage, onVideoEnd]);

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
              style={{ alignSelf: 'center', transform: 'translateY(0)' }}
              className={`ncisloading ${showPicture ? 'fade-out' : ''}`}
            />
          )}
        </div>
      ) : (
        <div className={`splashscreen ${videoEnded ? 'hidden' : ''}`}>
          <video
            id="splashVideo"
            muted
            onEnded={handleVideoEnded}
            width="500"
            height="500"
            webkit-playsinline
            playsInline
            disablePictureInPicture
            disableRemotePlayback
            style={{
              position: 'absolute', // Adjust as needed
              alignSelf: 'center',
            }}
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

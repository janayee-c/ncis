import React, { Component } from 'react';

class VideoErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true }, () => {
      const videoElement = document.getElementById('splashVideo');
      if (videoElement && videoElement.paused) {
        // If the video is paused, try to play it again
        videoElement.play().catch(err => {
          console.error('Unable to play video:', err);
        });
      }
    });

    // Log the error 
    console.error('Video Error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Sorry, something went wrong.</div>;
    }

    return this.props.children;
  }
}

export default VideoErrorBoundary;
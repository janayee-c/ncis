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

    // Error is logged in console 
    console.error('Video Error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      // Render a centred play button for users 
      return (
        <div className="centered-play-button" onClick={this.props.onRetry}>
          Play Video
        </div>
      );
    }

    return this.props.children;
  }
}

export default VideoErrorBoundary;

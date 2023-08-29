class VideoPausedError extends Error {
  constructor() {
    super('Error while trying to play the video due to autoplay restrictions');
    this.name = 'VideoAutoplayError';
    }
  }
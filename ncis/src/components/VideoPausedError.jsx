class VideoPausedError extends Error {
    constructor(message) {
      super(message);
      this.name = 'VideoPausedError';
    }
  }
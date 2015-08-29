'use strict';

class ScreenfullMock {

  constructor() {
    this.isFullscreen = false;
    this.enabled = true;
  }


  get raw() {
    return { fullscreenchange: 'something' };
  }


  toggle() {
    this.isFullscreen = !this.isFullscreen;
  }

}

module.exports = ScreenfullMock;

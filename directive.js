'use strict';

class FullScreenDirective {

  constructor(fullscreen, $body) {
    this._$body = $body;
    this._fullscreenService = fullscreen;
    this.toggleFullScreen = this.toggleFullScreen.bind(this);
    fullscreen.on('changed', function(isInFullscreen) {
      if (!isInFullscreen) this._toggleClass();
    }.bind(this));
  }


  toggleFullScreen() {
    this._fullscreenService.toggle();
    this._toggleClass();
  }


  _toggleClass() {
    this._$body.toggleClass(this.fullscreen, this._fullscreenService.isInFullScreen);
  }

}

module.exports = FullScreenDirective;

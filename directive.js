'use strict';

class FullScreenDirective {

  constructor(fullscreen, document) {
    this._$body = angular.element(document).find('body');
    this._fullscreenService = fullscreen;
    this.toggleFullScreen = this.toggleFullScreen.bind(this);
    fullscreen.on('changed', () => this._toggleClass());
  }


  toggleFullScreen() {
    this._toggleClass();
    this._fullscreenService.toggle();
  }


  _toggleClass() {
    this._$body.toggleClass(this.fullscreen);
  }

}

module.exports = FullScreenDirective;

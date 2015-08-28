'use strict';

var EventEmitter = require('events').EventEmitter;

class FullScreen extends EventEmitter {

  constructor(document, screenfull) {
    super();
    document.addEventListener(screenfull.raw.fullscreenchange, this._emitStateChangedEvent);
  }


  get isAllowed() {
    return screenfull.enabled;
  }


  get isInFullScreen() {
    return screenfull.isFullscreen;
  }


  toggle() {
    screenfull.toggle();
  }


  _emitStateChangedEvent() {
    this.emit('changed', screenfull.isFullscreen);
  }

}

module.exports = FullScreen;

'use strict';

var EventEmitter = require('events').EventEmitter;

class FullScreen extends EventEmitter {

  constructor(document, screenfull) {
    super();
    this._screenfull = screenfull;
    document.addEventListener(screenfull.raw.fullscreenchange, this._emitStateChangedEvent.bind(this));
  }


  get isAllowed() {
    return this._screenfull.enabled;
  }


  get isInFullScreen() {
    return this._screenfull.isFullscreen;
  }


  toggle() {
    this._screenfull.toggle();
  }


  _emitStateChangedEvent() {
    this.emit('changed', this._screenfull.isFullscreen);
  }

}

module.exports = FullScreen;

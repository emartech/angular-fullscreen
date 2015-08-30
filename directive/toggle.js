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
    this._$body.toggleClass(this.fsBodyClass, this._fullscreenService.isInFullScreen);
  }


  static create() {
    return function() {
      return {
        scope: {
          fsBodyClass: '@'
        },
        restrict: 'A',
        bindToController: true,
        controller: ['fullscreen', '$body', FullScreenDirective],
        controllerAs: 'fullScreenCtrl',
        controllerClass: FullScreenDirective,
        link: function (scope, element, attributes, controller) {
          element.bind('click', controller.toggleFullScreen);
        }
      }
    };
  }

}

module.exports = FullScreenDirective;

'use strict';

class FullScreenDirective {

  constructor(fullscreen, $body) {
    this._$body = $body;
    this._fullscreenService = fullscreen;
    this.toggle = this.toggle.bind(this);
    fullscreen.on('changed', function(isInFullscreen) {
      if (!isInFullscreen) this._toggleClass();
    }.bind(this));
  }


  toggle() {
    this._fullscreenService.toggle();
    this._toggleClass();
  }


  _toggleClass() {
    this._$body.toggleClass(this.fullscreenClass, this._fullscreenService.isInFullScreen);
  }


  static create() {
    return function() {
      return {
        scope: {
          fullscreenClass: '@'
        },
        restrict: 'A',
        bindToController: true,
        controller: ['fullscreen', '$body', FullScreenDirective],
        controllerAs: 'fullScreenCtrl',
        controllerClass: FullScreenDirective,
        link: function (scope, element, attributes, controller) {
          element.bind('click', controller.toggle);
        }
      }
    };
  }

}

module.exports = FullScreenDirective;

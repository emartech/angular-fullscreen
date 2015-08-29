'use strict';

var MODULE_NAME = 'angularFullscreen';
var Service = require('./service');
var Directive = require('./directive');
var screenfull = require('screenfull');

module.exports = function(angular) {
  angular
    .module(MODULE_NAME, [])
    .constant('document', document)
    .constant('screenfull', screenfull)
    .constant('$body', angular.element(document).find('body'))
    .service('fullscreen', Service.create())
    .directive('fullscreen', Directive.create());

  return MODULE_NAME;
};

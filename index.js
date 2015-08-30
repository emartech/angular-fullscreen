'use strict';

const MODULE_NAME = 'angularFullscreen';
const Service = require('./service/service');
const ToggleDirective = require('./directive/toggle');
const screenfull = require('screenfull');

module.exports = function(angular) {
  angular
    .module(MODULE_NAME, [])
    .constant('document', document)
    .constant('screenfull', screenfull)
    .constant('$body', angular.element(document).find('body'))
    .service('fullscreen', Service.create())
    .directive('toggle-fullscreen', Directive.create());

  return MODULE_NAME;
};

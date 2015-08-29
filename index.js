'use strict';

const MODULE_NAME = 'angularFullscreen';
const Service = require('./service/service');
const Directive = require('./directive');
const screenfull = require('screenfull');

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

'use strict';

var Service = require('../service');
var ScreenfullMock = require('./mocks/screenfull');
var DocumentMock = require('./mocks/document');

describe('Service', function() {

  var service;
  var document;
  var screenfull;

  beforeEach(function() {
    document = new DocumentMock;
    screenfull = new ScreenfullMock();
    service = new Service(document, screenfull);
  });

  describe('@isAllowed', function() {

    it('should be true if fullscreen is allowed', function() {
      screenfull.enabled = true;
      this.expect(service.isAllowed).to.be.true;
    });


    it('should be false if fullscreen is not allowed', function() {
      screenfull.enabled = false;
      this.expect(service.isAllowed).to.be.false;
    });

  });

  describe('@isInFullScreen', function() {

    it('should be false if the fullcreen mode is on', function() {
      screenfull.isFullscreen = true;
      this.expect(service.isInFullScreen).to.be.true;
    });


    it('should be false if the fullcreen mode is off', function() {
      screenfull.isFullscreen = false;
      this.expect(service.isInFullScreen).to.be.false;
    });

  });
  
  describe('#toggle', function() {
  
    it('should set the fullscreen mode to on if the previous value was off', function() {
      screenfull.isFullscreen = false;
      service.toggle();
      this.expect(service.isInFullScreen).to.be.true;
    });


    it('should set the fullscreen mode to off if the previous value was on', function() {
      screenfull.isFullscreen = true;
      service.toggle();
      this.expect(service.isInFullScreen).to.be.false;
    });
  
  });

  describe('changed event', function() {

    it('should emit a changed event with true if the fullscreen mode changed to on', function() {
      var eventCallback = this.sandbox.stub();
      screenfull.isFullscreen = true;
      service.on('changed', eventCallback);

      document.flush(screenfull.raw.fullscreenchange);
      this.expect(eventCallback).to.have.been.calledWith(true);
    });


    it('should emit a changed event with false if the fullscreen mode changed to off', function() {
      var eventCallback = this.sandbox.stub();
      screenfull.isFullscreen = false;
      service.on('changed', eventCallback);

      document.flush(screenfull.raw.fullscreenchange);
      this.expect(eventCallback).to.have.been.calledWith(false);
    });

  });

});

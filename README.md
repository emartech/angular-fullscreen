# angular-fullscreen

Install
---------

    npm install --save angular-fullscreen
    
    
App
---------

    require('angular-fullscreen')(angular);
    
    angular.module('your-app', [
      'angularFullscreen'
    ]);

Toggle
---------

    .e-row(ng-show="appCtrl.isFullScreenAllowed")
      .e-col-12
        a(href="#" ng-hide="appCtrl.isInFullScreen" fullscreen-toggle fullscreen-body-class="e-no-topmenu")
         span(ng-hide="appCtrl.isInFullScreen") expand
         span(ng-show="appCtrl.isInFullScreen") gather
        
Change between modes
---------
    .e-row(ng-show="appCtrl.isFullScreenAllowed")
      .e-col-12
        a(href="#" fullscreen-expand fullscreen-body-class="e-no-topmenu") expand without top menu
        a(href="#" fullscreen-expand fullscreen-body-class="e-no-leftmenu") expand without left menu
        
Exit
---------
    .e-row(ng-show="appCtrl.isFullScreenAllowed")
      .e-col-12
        a(href="#" ng-hide="appCtrl.isInFullScreen" fullscreen-gather) gather
        
Controller
---------

    class AppDirective {
    
      constructor(fullscreen) {
        this._fullscreen = fullscreen;
      }
    
      get isFullScreenAllowed() {
        return this._fullscreen.isAllowed;
      }
    
      get isInFullScreen() {
        return this._fullscreen.isInFullScreen;
      }
      static create() {
        return () => ({
          templateUrl: 'app.jade',
          scope: true,
          replace: true,
          bindToController: true,
          controller: ['fullscreen', AppDirective],
          controllerAs: 'appCtrl',
          controllerClass: AppDirective
        });
      }
    }
  

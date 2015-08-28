# angular-fullscreen

View
---------

    .e-row(ng-show="appCtrl.fullScreenAllowed")
        .e-col-12
          a(href="#" ng-hide="appCtrl.isInFullScreen" fullscreen="e-no-topmenu") {{ ::'main.expandFullScreen' | translate }}
          a(href="#" ng-show="appCtrl.isInFullScreen" fullscreen="e-no-topmenu") {{ ::'main.gatherFullScreen' | translate }}
      
Controller
---------

    class AppDirective {
    
      constructor(fullscreen) {
        this._fullscreen = fullscreen;
      }
    
      get fullScreenAllowed() {
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
  

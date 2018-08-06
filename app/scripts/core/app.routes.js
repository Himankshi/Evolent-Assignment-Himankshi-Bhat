(function() {
  'use strict';

  function runFn ($rootScope) {

    // register listener to watch route changes
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
      
    });
  }

  angular.module('app.core',[
    'ngRoute',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch'])
    .run(runFn);

})();

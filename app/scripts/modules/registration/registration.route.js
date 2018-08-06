(function() {
  'use strict';

  function routeProviderFn ($routeProvider) {
    $routeProvider
      .when('/register', {
        templateUrl: 'scripts/modules/registration/registration.template.html',
        controller: 'registration.controller',
        controllerAs:'registrationCtrl'
      });

  }

  routeProviderFn.$inject = ['$routeProvider'];

  angular.module('app.registration',[])
    .config(routeProviderFn);

})();

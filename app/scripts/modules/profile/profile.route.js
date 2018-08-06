(function() {
  'use strict';

  function routeProviderFn ($routeProvider) {
    $routeProvider
      .when('/profile', {
        templateUrl: 'scripts/modules/profile/profile.template.html',
        controller: 'Profile.controller',
        controllerAs:'profile'
      });

  }

  routeProviderFn.$inject = ['$routeProvider'];

  angular.module('app.profile',[])
    .config(routeProviderFn);

})();

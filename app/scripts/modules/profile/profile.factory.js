(function() {
  'use strict';

  function profileFactoryFn($location) {

    return {
      onHome: onHome
    };
    /**  Functions to redirect to home screen*/
    function onHome() {
      $location.path('/register');
    }

  }

  profileFactoryFn.$inject = ['$location'];

  angular.module('app.profile')
    .factory('profile.factory', profileFactoryFn);

})();

(function() {
  'use strict';

  function extendExceptionHandler($delegate) {
    return function(exception, cause) {
      $delegate(exception, cause);
      //var errorData = {
      //  exception: exception,
      //  cause: cause
      //};
     // alert(exception.msg);
    };
  }

  extendExceptionHandler.$inject = ['$delegate'];

  function routeProviderFn ($provide,$routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/register'
      });
    $provide.decorator('$exceptionHandler', extendExceptionHandler);
  }

  routeProviderFn.$inject = ['$provide','$routeProvider'];

  angular.module('app.core')
    .config(routeProviderFn);
})();

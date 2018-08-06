(function() {
  'use strict';

  function serverApiFn($http, config) {
    return {
      getData: getData,
      postData:postData
    };

    function getData(url, successCallback, errorCallback) {
      var getUrl = config.SERVERADDRESS + url;
      $http.get(getUrl).then(function(data) {
        successCallback(data);
      }).catch(function(data) {
        if (errorCallback){
          errorCallback(data);
        }
      });
    }

    function postData(url, data, successCallback, errorCallback) {
      var postUrl = config.SERVERADDRESS + url;
      $http.post(postUrl, data).then(function(data) {
        successCallback(data);
      }).catch(function(data) {
        if (errorCallback){
          errorCallback(data);
        }
      });
    }
  }

  serverApiFn.$inject = ['$http', 'CONFIG'];
angular.module('app')
.factory('serverApi', serverApiFn);


})();

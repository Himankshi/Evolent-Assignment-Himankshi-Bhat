(function() {
  'use strict';

  function registrationFactoryFn() {
    var contactObject;
    function setcontactObj(contactList) {
        contactObject = contactList;
    }
    function getcontactObj() {
        return contactObject;
    }
    return {
      setcontactObj: setcontactObj,
      getcontactObj: getcontactObj
    };
  }

  registrationFactoryFn.$inject = [];

  angular.module('app.registration')
    .factory('registration.factory', registrationFactoryFn);

})();

(function() {
  'use strict';

  function registrationFactoryFn() {
    var contactObject;
    /**  Function sets object */
    function setcontactObj(contactList) {
        contactObject = contactList;
    }
    /**  Function returns object */
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

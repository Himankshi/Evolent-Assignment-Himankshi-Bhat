(function () {
  'use strict';

  function ProfileControllerFn(registrationFactory, profileFactory, $location) {

    var _this = this;
    if (localStorage.getItem('contacts')) {
      let contactList = JSON.parse(localStorage.getItem('contacts'));
      for (let i = 0; i < contactList.length; i++) {
        delete contactList[i]['$$hashKey'];
      }
      _this.contactDetailList = contactList;
    } else {
      _this.contactDetailList = null;
    }
    _this.currentcontactDetail = null;
    _this.searchParam = null;
    /**  Functions to set contanct details*/
    _this.init = function () {
      _this.contactDetailList = registrationFactory.getcontactObj();
      if (!_this.contactDetailList) {
        if (localStorage.getItem('contacts')) {
          let contactList = JSON.parse(localStorage.getItem('contacts'));
          for (let i = 0; i < contactList.length; i++) {
            delete contactList[i]['$$hashKey'];
          }
          _this.contactDetailList = contactList;
        } else {
          _this.contactDetailList = null;
        }
      }
      _this.searchParam = $location.search();
      getCurrentcontactDetail();
      console.log(_this.contactDetailList, $location.search());
    };
    /**  Functions to get contanct details*/
    function getCurrentcontactDetail() {
      angular.forEach(_this.contactDetailList, function (data, key) {
        if (key == _this.searchParam.param) {
          _this.currentcontactDetail = data;
        }
      });
    };
    _this.init();
    _this.onBack = function () {
      $location.path('/register');
    };
  }

  ProfileControllerFn.$inject = ['registration.factory', 'profile.factory', '$location'];
  angular.module('app.profile')
    .controller('Profile.controller', ProfileControllerFn);

})();


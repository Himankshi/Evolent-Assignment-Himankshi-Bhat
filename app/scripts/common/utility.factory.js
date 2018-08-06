(function(){
  'use strict';
  // Utility module
  function utilityFactory(){
   //valid email address
    function isValidEmail(string){
      var re = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,returnType;
        if(re.test(string)){
          returnType = true;
        } else {
          returnType = false;
        }
      return returnType;
    }

    // Validate Name
    function validateName(event){
      if((!((event.charCode < 65 || event.charCode > 90) && (event.charCode < 97 || event.charCode > 123) && event.charCode !== 32))|| (event.keyCode === 8)){
        return;
      } else {
        event.preventDefault();
      }
    }
    // Validate Phone Number
    function validatePhone(event,customerPhone){
      var key = event.keyCode || event.charCode;
      if((key >= 48 && key <= 57)|| (key === 8)){
        return;
      } else {
        event.preventDefault();
      }
    }
  
    return {
      isValidEmail:isValidEmail,
      validateName:validateName,
      validatePhone:validatePhone
    };
  }
  utilityFactory.$inject = [];
  angular.module('app').factory('utility.factory', utilityFactory);
})();






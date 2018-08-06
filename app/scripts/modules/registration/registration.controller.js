(function() {
  'use strict';

  function registrationControllerFn (serverApi,registrationFactory,$location,utilityFactory) {
    var _this = this;
    _this.isStatusOpen=false;
    _this.openAlert=false;
    _this.contact = {fName: '', lName: '', phone:'', email:'',status:'Active'};
    if(localStorage.getItem('contacts')){
        let contactList = JSON.parse(localStorage.getItem('contacts'));
        for(let i=0;i<contactList.length;i++){
            delete contactList[i]['$$hashKey'];
         }
        _this.contactList = contactList;
    } else {
        _this.contactList = [];
    }
    registrationFactory.setcontactObj(_this.contactList);
    _this.buttonTxt = "Submit";
    _this.currentIndex = null;
    _this.isValidFName = _this.isValidLName = _this.isValidPhone = _this.isValidEmail = true;
    /**    Register Function */
    _this.registercontact = function (contactInfo) {
        if(_this.isFormValid()){
            if(_this.buttonTxt === "Submit"){
            _this.contactList.unshift({fName: contactInfo.fName, lName: contactInfo.lName, 
            phone:contactInfo.phone, email:contactInfo.email,status:contactInfo.status});
            localStorage.setItem('contacts',JSON.stringify(_this.contactList));
            }
            else if(_this.buttonTxt === "Update"){
             _this.contactList[ _this.currentIndex] = {fName: contactInfo.fName, lName: contactInfo.lName, 
            phone:contactInfo.phone, email:contactInfo.email,status:contactInfo.status};
            localStorage.setItem('contacts',JSON.stringify(_this.contactList));
            _this.buttonTxt = "Submit";
            }
            _this.contact = {fName: '', lName: '', phone:'', email:'',status:'Active'};
            registrationFactory.setcontactObj(_this.contactList);
        }else{
            _this.openAlert = true;
            _this.alertMsg = "Please enter all details correctly";
        }
    };
    _this.closeAlert = function(){
        _this.openAlert = false;
    }
    _this.selectStatus = function(status){
        _this.contact.status = status;
        this.isStatusOpen = false;
    }
    _this.deletecontact = function(index){
        angular.forEach(_this.contactList,function(data, key){
           if(key === index){
              _this.contactList.splice(key,1); 
           }
        });
        localStorage.setItem('contacts',JSON.stringify(_this.contactList));
    };
    _this.editcontact = function(index){
        angular.forEach(_this.contactList,function(data, key){
           if(key === index){
              _this.contact = {fName: data.fName, lName: data.lName, phone:data.phone, email:data.email,status:data.status};
              _this.buttonTxt = "Update";
              _this.currentIndex = key;
              return;
           }
        });
    };
    _this.toggleStatus = function(){
        this.isStatusOpen = !this.isStatusOpen;
    }
    _this.contactDetail = function(index){
        $location.path('/profile').search({param: index}); 
    };
    _this.validateName = function(event){
        return utilityFactory.validateName(event);
    };
    _this.validatePhone = function(event){
        return utilityFactory.validatePhone(event);
    };
    _this.validateEmail= function(email){
        if(utilityFactory.isValidEmail(email)){
            _this.isValidEmail = true;
        }else{
            _this.isValidEmail = false;
        }
    };
    _this.isFormValid = function(){
        var isFormValid = false;
        _this.isValidFName = _this.isValidLName = _this.isValidPhone = _this.isValidEmail = true;
        if(!_this.contact.fName){
            _this.isValidFName = false;
        }
        if(!_this.contact.lName){
            _this.isValidLName = false;
        }
        if(!_this.contact.phone || _this.contact.phone.length !== 10){
            _this.isValidPhone = false;
        }
        if(!_this.contact.email){
           _this.isValidEmail = false;
        }
        if(_this.contact.email){
          _this.validateEmail(_this.contact.email);
        }
        if(_this.isValidFName &&  _this.isValidLName &&  _this.isValidPhone &&_this.isValidEmail){
            isFormValid = true;
        }else{
            isFormValid = false;
        }
        return isFormValid;
    };
  }

  registrationControllerFn.$inject = ['serverApi','registration.factory','$location','utility.factory'];

angular.module('app.registration')
        .controller('registration.controller', registrationControllerFn);


})();

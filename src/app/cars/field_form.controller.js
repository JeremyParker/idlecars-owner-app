'use strict';

angular.module('idlecars')
.controller('fieldForm.controller', function ($scope, $state, $timeout, navbarFunction) {

  $scope.index = 0;
  $scope.isInvalid = true;

  // next> button
  $scope.goNext = function() {
    if ($scope.index != $scope.fieldset.length-1) {
      $scope.index = $scope.index + 1;
      $scope.validateForm();
      return
    }
    navbarFunction.save(getDriverInfo())
  }

  // < button
  $scope.goBack = function() {
    if ($scope.index != 0) {
      $scope.index = $scope.index - 1;
      $scope.validateForm();
      return
    }
    navbarFunction._popState();
  }

  $scope.validateForm = function() {
    $scope.isInvalid = false;
    var fileds = $scope.fieldset[$scope.index];

    for (var i = 0; i < fileds.length; i++) {
      var field_name = fileds[i].name;

      if ($scope['fieldForm'][field_name]['$invalid']) {
        $scope.isInvalid = true;
      }
    }
  }

  // change of index -> change the form field
  $scope.$watch(function(){return $scope.index}, function() {

    // decide which field need to be shown by index
    switch ($scope.index) {
      case 0:
        $scope.isField0 = true;
        $scope.isField1 = false;
        $scope.isField2 = false;
        break;
      case 1:
        $scope.isField0 = false;
        $scope.isField1 = true;
        $scope.isField2 = false;
        break;
      case 2:
        $scope.isField0 = false;
        $scope.isField1 = false;
        $scope.isField2 = true;
        break;
    }
  })

  var field0 = [{
    label: 'Your email address',
    placeholder: 'Email address',
    name: 'email',
    type: 'email',
    val: '',
    maxlength: '50'
  }];

  var field1 = [{
    id: 'first_name',
    label: 'What\'s your name?',
    placeholder: 'First name',
    name: 'first_name',
    type: 'text',
    val: '',
    maxlength: '20'
  },
  {
    id: 'last_name',
    label: 'What\'s your name?',
    placeholder: 'Last name',
    name: 'last_name',
    type: 'text',
    val: '',
    maxlength: '20'
  }];

  var field2 = [{
    label: 'Your phone number',
    placeholder: '(222)-555-1234',
    name: 'phone_number',
    type: 'tel',
    val: '',
    pattern: '[^\\d]*\\d{3}[^\\d]*\\d{3}[^\\d]*\\d{4}$',
    maxlength: '14',
  }];

  // default field setting
  $scope.fieldset = [field0, field1, field2];

  var getDriverInfo = function() {
    var driverInfo = {};
    driverInfo.first_name = field1[0].val;
    driverInfo.last_name = field1[1].val;
    driverInfo.email = field0[0].val;
    driverInfo.phone_number = field2[0].val;
    return driverInfo;
  }

})

'use strict';

angular.module('idlecars')
.controller('fieldForm.controller', function ($scope, navbarFunction) {

  // index -> which field in fields to show up
  // isInvalid -> whether or not to disable the next> button
  $scope.index = 0;
  $scope.isInvalid = true;

  // next> button
  $scope.goNext = function() {
    if ($scope.index != $scope.fields.length-1) {
      $scope.index++;
      return
    }
    navbarFunction.save(getDriverInfo())
  }

  // < button
  $scope.goBack = function() {
    if ($scope.index != 0) {
      $scope.index--;
      return
    }
    navbarFunction._popState();
  }

  // validates when current input's validation status changes or when Next, Back button is triggered
  $scope.validateForm = function() {
    // enable next> button initially and disable it if any of the input is invalid
    $scope.isInvalid = false;
    var field = $scope.fields[$scope.index];

    for (var i = 0; i < field.length; i++) {
      var field_name = field[i].name;

      if ($scope['fieldForm'][field_name]['$invalid']) {
        $scope.isInvalid = true;
      }
    }
  }

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
  $scope.fields = [field0, field1, field2];

  var getDriverInfo = function() {
    var driverInfo = {};
    driverInfo.first_name = field1[0].val;
    driverInfo.last_name = field1[1].val;
    driverInfo.email = field0[0].val;
    driverInfo.phone_number = field2[0].val;
    return driverInfo;
  }

})

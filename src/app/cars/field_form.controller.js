'use strict';

angular.module('idlecars')
.controller('fieldForm.controller', function ($scope) {

  $scope.index = 0;

  // next> button
  $scope.goNext = function() {
    if ($scope.index != field.length-1) {
      $scope.index = $scope.index + 1;
    }
    else {

    }
  }

  // < button
  $scope.back = function() {
    if ($scope.index != 0) {
      $scope.index = $scope.index - 1;
    }
    else {

    }
  }

  // watch the change of index then change the form field
  $scope.$watch(function(){return $scope.index}, function() {
    setForm();
    if ($scope.index == '1') {
      $scope.showLastName = true;
    }
    else {
      $scope.showLastName = false;
    }
  })

  // set default not to show lastname
  $scope.showLastName = false;

  var field0 = {
    label: 'Your email address',
    placeholder: 'Email address',
    name: 'email',
    type: 'email',
  };

  var field1 = {
    label: 'What\'s your name?',
    placeholder: 'First name',
    name: 'firstName',
    type: 'text',
  };

  var field2 = {
    label: 'Your phone number',
    placeholder: '(222)-555-1234',
    name: 'phone',
    type: 'tel',
  };

  // default field setting
  var field = [field0, field1, field2];

  var setForm = function() {
    $scope.label = field[$scope.index].label;
    $scope.placeholder = field[$scope.index].placeholder;
    $scope.name = field[$scope.index].name;
    $scope.type = field[$scope.index].type;
  }
})

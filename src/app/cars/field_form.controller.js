'use strict';

angular.module('idlecars')
.controller('fieldForm.controller', function ($scope) {
  $scope.labelPool = ['Your email address', 'What\'s your name?', 'Your phone number'];
  $scope.placeholderPool = ['Email address', 'First name', '(222)-555-1234'];
  $scope.typePool = ['email', 'text', 'tel'];
  $scope.namePool = ['email', 'name', 'phone'];

  $scope.index = 0;
  $scope.placeholder = $scope.placeholderPool[$scope.index];
  $scope.name = $scope.namePool[$scope.index];
  $scope.type = $scope.typePool[$scope.index];
  $scope.label = $scope.labelPool[$scope.index];
  $scope.showLastName = false;
})

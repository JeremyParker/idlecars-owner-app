'use strict';

angular.module('idlecars')
.controller('removals.add.controller', function ($scope, $rootScope, $state, $stateParams, $timeout, RemovalService) {
  // this predefine is very important,
  // otherwise angular won't assign the receiving removal to the correct hack license
  $scope.user = {};
  $scope.showSkipLink = false;

  // NOTE: this user is actually the removal object, we need to rename user --> object in form.jade
  RemovalService.get($stateParams.removalId).then(function (removal) {
    $scope.user = removal;
    $scope.validateForm();
  })

  $scope.validateForm = function() {
    if ($scope.$$childHead.fieldForm) {
      $timeout(function () { $rootScope.navNextEnabled = $scope.$$childHead.fieldForm.$valid });
    };
  }

  $rootScope.navGoNext = function() {
    RemovalService.patch($scope.user.id, $scope.user).then(function (removal) {
      $scope.user = angular.copy(removal);
      $state.go($scope.$$childHead.nextState);
    })
  }
})

.controller('removals.add.first_name.controller', function ($scope, NavbarService) {
  $scope.fields = [{
    label: 'Please enter the driver\'s first name',
    placeholder: 'First name',
    name: 'first_name',
    type: 'text',
    maxlength: '30',
    autoFocus: true,
  }];

  $scope.nextState = '^.last_name';
  NavbarService.validateInit($scope);
})

.controller('removals.add.last_name.controller', function ($scope, NavbarService) {
  $scope.fields = [{
    label: 'Please enter the driver\'s last name',
    placeholder: 'Last name',
    name: 'last_name',
    type: 'text',
    maxlength: '30',
    autoFocus: true,
  }];

  $scope.nextState = '^.success';
  NavbarService.validateInit($scope);
})

.controller('removals.add.success.controller', function ($scope, $state) {
  var myCars = function () { $state.go('cars') }

  $scope.label = 'Your request to remove a driver has been sent to All Taxi.';

  $scope.buttons = [{
    value: 'OK',
    click: myCars,
  }]
})

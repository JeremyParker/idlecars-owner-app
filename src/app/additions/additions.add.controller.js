'use strict';

angular.module('idlecars')
.controller('additions.add.controller', function ($scope, $rootScope, $state, $stateParams, $timeout, AdditionService) {
  // this predefine is very important,
  // otherwise angular won't assign the receiving addition to the correct medallion
  $scope.user = {};

  // TODO: this user is actually the addition object, we need to rename user --> object in form.jade
  AdditionService.get($stateParams.additionId).then(function (addition) {
    $scope.user = addition;
    $scope.validateForm();
  })
  // TODO: catch error

  $scope.validateForm = function() {
    if ($scope.$$childHead.fieldForm) {
      $timeout(function () { $rootScope.navNextEnabled = $scope.$$childHead.fieldForm.$valid });
    };
  }

  $rootScope.navGoNext = function() {
    AdditionService.patch($scope.user.id, $scope.user).then(function (addition) {
      $scope.user = angular.copy(addition);
      $state.go($scope.$$childHead.nextState);
    })
  }
})

.controller('additions.add.phone_number.controller', function ($scope, $rootScope) {
  $scope.fields = [{
    label: 'Please enter the driver\'s phone number',
    name: 'phone_number',
    type: 'text',
    autoFocus: true,
  }];

  $scope.nextState = '^.email';

  $rootScope.navNextEnabled = true;
})

.controller('additions.add.email.controller', function ($scope, $rootScope) {
  $scope.fields = [{
    label: 'Please enter the driver\'s email address',
    name: 'email',
    type: 'text',
    autoFocus: true,
  }];

  $scope.nextState = '^.first_name';

  $rootScope.navNextEnabled = true;
})

.controller('additions.add.first_name.controller', function ($scope, $rootScope) {
  $scope.fields = [{
    label: 'Please enter the driver\'s first name',
    name: 'first_name',
    type: 'text',
    autoFocus: true,
  }];

  $scope.nextState = '^.last_name';

  $rootScope.navNextEnabled = true;
})

.controller('additions.add.last_name.controller', function ($scope, $rootScope) {
  $scope.fields = [{
    label: 'Please enter the driver\'s last name',
    name: 'last_name',
    type: 'text',
    autoFocus: true,
  }];

  $scope.nextState = '^.success';

  $rootScope.navNextEnabled = true;
})

.controller('additions.add.success.controller', function ($scope, $state) {
  var myCars = function () { $state.go('cars') }

    $scope.label = 'Your request to add a driver has been sent to All Taxi.';

  $scope.buttons = [{
    value: 'OK',
    click: myCars,
  }]
})

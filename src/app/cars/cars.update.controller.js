'use strict';

angular.module('idlecars')
.controller('cars.update.controller', function ($scope, $rootScope, $timeout, $stateParams, $state, CarService, NavbarService) {
  // TODO: this user is actually the car object, we need to rename it to object
  $scope.user = $stateParams.car || {};
  $scope.colors = ['Black', 'Charcoal', 'Grey', 'Dark Blue', 'Blue', 'Tan', 'White'];

  if (!$stateParams.car) {
    CarService.get($stateParams.carId).then(function (car) {
      $scope.user = car;
      $scope.validateForm();
    })
  }

  $scope.validateForm = function() {
    $timeout(function () { $rootScope.navNextEnabled = $scope.$$childHead.fieldForm.$valid });
  }

  $rootScope.navSave = function() {
    CarService.patch($stateParams.carId, $scope.user).then(function () {
      $state.go('cars.detail', {carId: $stateParams.carId});
    })
  }

  NavbarService.validateInit($scope, true);
})

.controller('cars.update.rent.controller', function ($scope) {
  $scope.fields = [{
    label: 'Rent per week($)',
    name: 'solo_cost',
    type: 'text',
    autoFocus: true,
  }];
})

.controller('cars.update.available.controller', function ($scope) {
  //TODO: date format does not work. we need to refactor this
  $scope.fields = [{
    label: 'When will the car be available',
    name: 'next_available_date',
    placeholder: 'YYYY-MM-DD',
    type: 'date',
    autoFocus: true,
  }];
})

.controller('cars.update.deposit.controller', function ($scope) {
  $scope.fields = [{
    label: 'Deposit required($)',
    name: 'solo_deposit',
    type: 'text',
    autoFocus: true,
  }];
})

.controller('cars.update.minimum.controller', function ($scope) {
  $scope.fields = [{
    label: 'Minimum rental',
    name: 'min_lease',
    type: 'text',
    autoFocus: true,
  }];
})

.controller('cars.update.mileage.controller', function ($scope) {
  $scope.fields = [{
    label: 'Current mileage(optional)',
    name: 'last_known_mileage',
    type: 'text',
    autoFocus: true,
  }];
})

.controller('cars.update.exterior.controller', function ($scope, $rootScope) {
  //TODO: this does not update $scope.user correctly. we need to refactor it
  $rootScope.navNextEnabled = true;

  $scope.formTitle = 'Please select exterior color:';
  $scope.singleChoice = {
    key: 'exterior_color',
    choices: $scope.colors,
  }
})

.controller('cars.update.interior.controller', function ($scope, $rootScope) {
  //TODO: this does not update $scope.user correctly. we need to refactor it
  $rootScope.navNextEnabled = true;

  $scope.formTitle = 'Please select interior color:';
  $scope.singleChoice = {
    key: 'interior_color',
    choices: $scope.colors,
  }
})

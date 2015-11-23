'use strict';

angular.module('idlecars')
.controller('cars.add.controller', function ($scope, $rootScope) {
  // this user is actually the car object
  $scope.user = {};

  $scope.validateForm = function() {
    $rootScope.navNextEnabled = $scope.$$childHead.fieldForm.$valid;
  }
})


.controller('cars.add.plate.controller', function ($scope, $rootScope, $state, NavbarService) {
  $scope.fields = [{
    label: 'To add a car, please enter the TLC plate of the car. We verify that all listed cars are TLC registered:',
    name: 'plate',
    type: 'text',
    autoFocus: true,
  }];

  $rootScope.navGoNext = function() {
    // TODO: send request to plate end point to verify the car
    $state.go('^.confirm')
  }

  NavbarService.validateInit($scope);
})

.controller('cars.add.confirm.controller', function ($scope, $state) {
  $scope.addCar = function () {
    // TODO: send request to add the car
    $state.go('^.rent')
  }

  NavbarService.validateInit($scope);
})

.controller('cars.add.rent.controller', function ($scope, $rootScope, $state, NavbarService) {
  $scope.fields = [{
    label: 'Rent per week($)',
    name: 'rent',
    type: 'text',
    autoFocus: true,
  }];

  $rootScope.navGoNext = function() {
    $state.go('^.available')
  }
  NavbarService.validateInit($scope);
})

.controller('cars.add.available.controller', function ($scope, $rootScope, $state, NavbarService) {
  $scope.fields = [{
    label: 'When will the car be available',
    name: 'available',
    placeholder: 'YYYY-MM-DD',
    type: 'date',
    autoFocus: true,
  }];

  $rootScope.navGoNext = function() {
    $state.go('^.deposit')
  }

  NavbarService.validateInit($scope);
})

.controller('cars.add.deposit.controller', function ($scope, $rootScope, $state, NavbarService) {
  $scope.fields = [{
    label: 'Deposit required($)',
    name: 'deposit',
    type: 'text',
    autoFocus: true,
  }];

  $rootScope.navGoNext = function() {
    $state.go('^.minimum')
  }

  NavbarService.validateInit($scope);
})

.controller('cars.add.minimum.controller', function ($scope, $rootScope, $state, NavbarService) {
  $rootScope.navGoNext = function() {
    $state.go('^.mileage')
  }

  NavbarService.validateInit($scope);
})

.controller('cars.add.mileage.controller', function ($scope, $rootScope, $state, NavbarService) {
  $scope.fields = [{
    label: 'Current mileage(optional)',
    name: 'mileage',
    type: 'text',
    autoFocus: true,
  }];

  $rootScope.navGoNext = function() {
    $state.go('^.exterior')
  }

  NavbarService.validateInit($scope);
})

.controller('cars.add.exterior.controller', function ($scope, $rootScope, $state) {
  $rootScope.navNextEnabled = true;

  $scope.formTitle = 'Please select exterior color:';
  $scope.singleChoice = {
    key: 'exteriorColor',
    choices: ['black', 'red', 'white', 'yellow'],
  }

  $rootScope.navGoNext = function() {
    $state.go('^.interior')
  }
})

.controller('cars.add.interior.controller', function ($scope, $rootScope, $state) {
  $rootScope.navNextEnabled = true;

  $scope.formTitle = 'Please select interior color:';
  $scope.singleChoice = {
    key: 'interiorColor',
    choices: ['black', 'red', 'white', 'yellow'],
  }

  $rootScope.navGoNext = function() {
    $state.go('^.success')
  }
})

.controller('cars.add.success.controller', function ($scope, $rootScope, $state) {
  $rootScope.navGoNext = function() {
    $state.go('cars')
  }
})

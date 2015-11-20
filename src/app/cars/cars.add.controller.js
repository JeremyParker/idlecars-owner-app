'use strict';

angular.module('idlecars')
.controller('cars.add.controller', function ($scope, $rootScope) {
  // this user is actually the car object
  $scope.user = {};

  $scope.validateForm = function() {
    $rootScope.navNextEnabled = $scope.$$childHead.fieldForm.$valid;
  }
})


.controller('cars.add.plate.controller', function ($scope, $rootScope, $state) {
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
})

.controller('cars.add.confirm.controller', function ($scope, $state) {
  $scope.addCar = function () {
    // TODO: send request to add the car
    $state.go('^.rent')
  }
})

.controller('cars.add.rent.controller', function ($scope, $rootScope, $state) {
  $scope.fields = [{
    label: 'Rent per week($)',
    name: 'rent',
    type: 'text',
    autoFocus: true,
  }];

  $rootScope.navGoNext = function() {
    $state.go('^.available')
  }
})

.controller('cars.add.available.controller', function ($scope, $rootScope, $state) {
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
})

.controller('cars.add.deposit.controller', function ($scope, $rootScope, $state) {
  $scope.fields = [{
    label: 'Deposit required($)',
    name: 'deposit',
    type: 'text',
    autoFocus: true,
  }];

  $rootScope.navGoNext = function() {
    $state.go('^.minimum')
  }
})

.controller('cars.add.minimum.controller', function ($scope, $rootScope, $state) {
  $rootScope.navGoNext = function() {
    $state.go('^.mileage')
  }
})

.controller('cars.add.mileage.controller', function ($scope, $rootScope, $state) {
  $scope.fields = [{
    label: 'Current mileage(optional)',
    name: 'mileage',
    type: 'text',
    autoFocus: true,
  }];

  $rootScope.navGoNext = function() {
    $state.go('^.exterior')
  }
})

.controller('cars.add.exterior.controller', function ($scope, $rootScope, $state) {
  $rootScope.navNextEnabled = true;

  $scope.formTitle = 'Please select exterior color:';
  $scope.choices = ['black', 'red', 'white', 'yellow'];

  $rootScope.navGoNext = function() {
    console.log($scope.$$childHead.selectedItem)
    $state.go('^.interior')
  }
})

.controller('cars.add.interior.controller', function ($scope, $rootScope, $state) {
  $rootScope.navNextEnabled = true;

  $scope.formTitle = 'Please select interior color:';
  $scope.choices = ['black', 'red', 'white', 'yellow'];

  $rootScope.navGoNext = function() {
    console.log($scope.$$childHead.selectedItem)
    $state.go('^.success')
  }
})

.controller('cars.add.success.controller', function ($scope, $rootScope, $state) {
  $rootScope.navGoNext = function() {
    $state.go('cars')
  }
})

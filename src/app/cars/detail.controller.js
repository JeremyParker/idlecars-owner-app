'use strict';

angular.module('idlecars')
.controller('cars.detail.controller', function ($scope, $stateParams, $state, CarService, AppNotificationService, LANDING_STATE) {

  $scope.car = {};

  CarService.get($stateParams.carId)
  .then(function (car) { $scope.car = angular.copy(car) })
  .catch(function () { $state.go(LANDING_STATE) })

  var getLink = function (content) {
    var link = 'cars.update.';
    link += content;
    link += '({carId:' + $stateParams.carId + '})';
    return link;
  }

  $scope.carDetail = [
    // {title: 'Shift', link: getLink('shift'), content: 'shift_display'},
    {title: 'Shift description', link: getLink('description'), content: 'shift_details'},
    {title: 'Weekly rent', link: getLink('rent'), content: 'weekly_rent'},
    {title: 'Deposit', link: getLink('deposit'), content: 'deposit'},
    // {title: 'Min rental', link: getLink('minimum'), content: 'min_lease_display'},
    {title: 'Available', link: getLink('available'), content: 'available_date_display'},
    {title: 'Mileage', link: getLink('mileage'), content: 'last_known_mileage'},
    // {title: 'Exterior color', link: getLink('exterior'), content: 'exterior_color'},
    // {title: 'Interior color', link: getLink('interior'), content: 'interior_color'},
  ];

  var errorDisplay = function () {
    AppNotificationService.push({error: 'Sorry, something went wrong. Please try again later'});
  }

  var requestFinished = function () { $scope.isBusy = false }

  $scope.relistCar = function () {
    $scope.isBusy = true;
    CarService.patch($scope.car.id, {next_available_date: [2015, 0, 1]})
    .then(function (car) {
      $scope.car = car;
      var message = "You've successfully relisted your " + car.name + " " + car.plate;
      AppNotificationService.push({success: message});
    })
    .catch(errorDisplay)
    .finally(requestFinished)
  }

  $scope.delistCar = function () {
    $scope.isBusy = true;
    CarService.patch($scope.car.id, {next_available_date: []})
    .then(function (car) {
      $scope.car = car;
      var message = "You've delisted your " + car.name + " " + car.plate;
      AppNotificationService.push({warning: message});
    })
    .catch(errorDisplay)
    .finally(requestFinished)
  }

  $scope.deleteCar = function () {
    $scope.isBusy = true;
    CarService.patch($scope.car.id, {owner: null})
    .then(function (car) {
      $scope.car = car;
      var message = "You have deleted that shift on your " + car.name + " " + car.plate;
      AppNotificationService.push({success: message});
      $state.go('^');
    })
    // an error message comes from the server
    .finally(requestFinished)
  }
})

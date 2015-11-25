'use strict';

angular.module('idlecars')
.controller('cars.detail.controller', function ($scope, $stateParams, $state, CarService, AppNotificationService, LANDING_STATE) {
  if (!$stateParams.car) {
    CarService.get($stateParams.carId)
    .then(function (car) { $scope.car = angular.copy(car) })
    .catch(function () { $state.go(LANDING_STATE) })
  }

  $scope.car = $stateParams.car;

  $scope.carInfo = [
    {title: 'Car', content: 'name'},
    {title: 'Plate', content: 'plate'},
    {title: 'Status', content: 'status'},
    {title: 'Interested drivers', content: 'interested_drivers'},
  ];

  $scope.carDetail = [
    {title: 'Weekly rent', link: '.update.rent', content: 'solo_cost'},
    {title: 'Available', link: '.update.available', content: 'next_available_date'},
    {title: 'Deposit', link: '.update.deposit', content: 'solo_deposit'},
    {title: 'Min rental', link: '.update.minimum', content: 'min_lease'},
    {title: 'Mileage', link: '.update.mileage', content: 'last_known_mileage'},
    {title: 'Exterior color', link: '.update.exterior', content: 'exterior_color'},
    {title: 'Interior color', link: '.update.interior', content: 'interior_color'},
  ];

  var errorDisplay = function () {
    AppNotificationService.push({error: 'Sorry, something went wrong. Please try again later'});
  }

  var requestFinished = function () { $scope.isBusy = false }

  $scope.relistCar = function () {
    $scope.isBusy = true;
    CarService.patch($scope.car.id, {status: 'available'})
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
    CarService.patch($scope.car.id, {status: 'busy'})
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
      var message = "You've successfully deleted your " + car.name + " " + car.plate;
      AppNotificationService.push({success: message});
      $state.go('^');
    })
    .finally(requestFinished)
    .catch(errorDisplay)

  }
})

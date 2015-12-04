'use strict';

angular.module('idlecars')
.controller('cars.detail.controller', function ($scope, $stateParams, $state, CarService, RequiredService, AppNotificationService, LANDING_STATE) {

  var goRequired = function () {
    if ($scope.car && $scope.car.state_string == 'Waiting for information') {
      var state = RequiredService.carState($scope.car)
      $state.go(state, {carId: $scope.car.id})    };
  }

  if (!$stateParams.car) {
    CarService.get($stateParams.carId)
    .then(function (car) { $scope.car = angular.copy(car); goRequired() })
    .catch(function () { $state.go(LANDING_STATE) })
  }
  else { $scope.car = $stateParams.car; goRequired() }

  var getLink = function (content) {
    var link = 'cars.update.';
    link += content;
    link += '({carId:' + $stateParams.carId + '})';
    return link;
  }

  $scope.carDetail = [
    {title: 'Weekly rent', link: getLink('rent'), content: 'solo_cost'},
    {title: 'Deposit', link: getLink('deposit'), content: 'solo_deposit'},
    {title: 'Min rental', link: getLink('minimum'), content: 'min_lease_display'},
    {title: 'Available', link: getLink('available'), content: 'available_date_display'},
    {title: 'Mileage', link: getLink('mileage'), content: 'last_known_mileage'},
    {title: 'Exterior color', link: getLink('exterior'), content: 'exterior_color'},
    {title: 'Interior color', link: getLink('interior'), content: 'interior_color'},
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
      var message = "You've successfully deleted your " + car.name + " " + car.plate;
      AppNotificationService.push({success: message});
      $state.go('^');
    })
    .finally(requestFinished)
    .catch(errorDisplay)

  }
})

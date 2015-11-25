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

  $scope.delistCar = function () {
    // TODO: an endpoint to delist car
  }

  $scope.deleteCar = function () {
    CarService.patch($scope.car.id, {owner: null})
    .then(function (car) {
      var message = "You've successfully deleted your " + car.name + " " + car.plate;
      AppNotificationService.push({success: message});
      $state.go('^');
    })
    .catch(function () {
      AppNotificationService.push({error: 'Sorry, something went wrong. Please try again later'})
    })

  }
})

'use strict';

angular.module('idlecars')
.controller('cars.detail.controller', function ($scope, $stateParams, CarService, LANDING_STATE) {
  console.log($stateParams.car)

  if ($stateParams.car) {
    CarService.get($stateParams.carId)
    .then(function (car) { $scope.car = angular.copy(car) })
    .catch(function () { $state.go(LANDING_STATE) })
  }

  $scope.car = $stateParams.car;

  $scope.carInfo = [
    {title: 'Car', content: 'name'},
    {title: 'Status', content: 'status'},
    {title: 'Interested drivers', content: 'interested_drivers'},
  ];

  $scope.carDetail = [
    {title: 'Weekly rent', link: '.update.rent', content: 'solo_cost'},
    {title: 'Available', link: '.update.available', content: 'next_available_date'},
    {title: 'Deposit', link: '.update.deposit', content: 'solo_deposit'},
    {title: 'Deposit', link: '.update.deposit', content: 'solo_deposit'},
    {title: 'Deposit', link: '.update.deposit', content: 'solo_deposit'},
    {title: 'Deposit', link: '.update.deposit', content: 'solo_deposit'},
  ];

})

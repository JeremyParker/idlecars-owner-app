'use strict';

angular.module('idlecars')
.controller('cars.detail.controller', function ($scope, $stateParams, $state, CarService, LANDING_STATE) {
  if (!$stateParams.car) {
    CarService.get($stateParams.carId)
    .then(function (car) { $scope.car = angular.copy(car) })
    .catch(function () { $state.go(LANDING_STATE) })
  }

  var getLink = function (content) {
    var link = 'cars.update.';
    link += content;
    link += '({carId:' + $stateParams.carId + '})';
    return link;
  }

  $scope.car = $stateParams.car;

  $scope.carInfo = [
    {title: 'Car', content: 'name'},
    {title: 'Plate', content: 'plate'},
    {title: 'Status', content: 'status'},
    {title: 'Interested drivers', content: 'interested_drivers'},
  ];

  $scope.carDetail = [
    {title: 'Weekly rent', link: getLink('rent'), content: 'solo_cost'},
    {title: 'Available', link: getLink('available'), content: 'next_available_date'},
    {title: 'Deposit', link: getLink('deposit'), content: 'solo_deposit'},
    {title: 'Min rental', link: getLink('minimum'), content: 'min_lease'},
    {title: 'Mileage', link: getLink('mileage'), content: 'last_known_mileage'},
    {title: 'Exterior color', link: getLink('exterior'), content: 'exterior_color'},
    {title: 'Interior color', link: getLink('interior'), content: 'interior_color'},
  ];

  $scope.delist = function () {
    // TODO: an endpoint to delist car
  }
})

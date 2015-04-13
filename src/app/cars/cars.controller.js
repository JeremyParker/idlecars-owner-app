'use strict';

angular.module('idlecars')
.controller('CarsCtrl', function ($scope, $http) {
  $scope.cars = [
    {make: 'Lincoln', model: 'MKT', year: '2013'},
    {make: 'GMC', model: 'Yukon', year: '2014'},
  ];
});

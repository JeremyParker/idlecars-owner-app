'use strict';

angular.module('idlecars')
.controller('CarsCtrl', function ($scope, $http) {
  $scope.cars = [
    {id: 5, make: 'Lincoln', model: 'MKT', year: '2013'},
    {id: 23, make: 'GMC', model: 'Yukon', year: '2014'},
  ];
});

'use strict';

angular.module('idlecars')
.controller('cars.controller', function ($scope, $localStorage) {
  $scope.cars = [
    {id: 1, name: 'Toyota', plate: 'T4938293'},
    {id: 2, name: 'Toyota', plate: 'T4938293'},
    {id: 3, name: 'Toyota', plate: 'T4938293'}
  ];
})

'use strict';

angular.module('idlecars')
.controller('MainCtrl', function ($scope, $http) {
  $http.get('http://localhost:8000/').then(function(response) {
    $scope.cars = response.data;
  })
});

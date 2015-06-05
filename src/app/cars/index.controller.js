'use strict';

angular.module('idlecars')
.controller('cars.indexCtrl', function ($scope, $http, CarService) {
  CarService.query().$promise.then(function(cars) {
    $scope.cars = cars;
  });

  $scope.$emit('changeNavbar', 'main');
})

.controller('main.controller', function($scope) {
  $scope.templateUrl = 'navbar_main.html'

  $scope.$on('changeNavbar', function(event, data) {
    console.log(data)
    switch (data) {
      case 'field':
        $scope.templateUrl = 'navbar_field_by_field.html';
        break;
      default:
        $scope.templateUrl = 'navbar_main.html';
    }
  })
})

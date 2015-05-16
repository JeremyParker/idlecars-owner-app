'use strict';

angular.module('idlecars')
  .controller('navbar.controller', function ($scope, $location, $stateParams) {
    $scope.goBack = function() {

      var currentPath = $location.path();
      var last = currentPath[currentPath.length - 1];
      var destination;

      if (last == 'g') {
        destination = 'http://localhost:3000/#/cars/' + $stateParams.carId;
      }
      else if (!isNaN(last)) {
        destination = 'http://localhost:3000';
      }
      else {
        destination = 'http://localhost:8000';
      };

      window.location.replace(destination);
    }
  });

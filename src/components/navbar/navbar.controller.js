'use strict';

angular.module('idlecars')
  .controller('navbar.controller', function ($scope, $location, $stateParams) {
    $scope.goBack = function() {

      var currentPath = $location.path();
      var last = currentPath[currentPath.length - 1];

      if (last == 'g') {
        var destination = '/cars/' + $stateParams.carId;
        $location.path(destination);
      }
      else if (!isNaN(last)) {
        $location.path('/');
      }
      else {
        window.location.replace('http://localhost:8000');
      };
    }
  });

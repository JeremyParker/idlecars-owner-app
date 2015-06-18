'use strict';

angular.module('idlecars')
.controller('drivers.new.controller', function ($scope, DriverService) {
  $scope.createDriver = function() {
    var newDriver = new DriverService($scope.driver);
    newDriver.$save().then(function() {
      console.log('saved');
    });
  };
});

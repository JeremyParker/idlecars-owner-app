'use strict';

angular.module('idlecars')
.controller('map.control.controller', function ($scope, mapService) {

  $scope.centerMyLoc = function () {
    mapService.map.center.latitude = mapService.marker.coords.latitude;
    mapService.map.center.longitude = mapService.marker.coords.longitude;
  };

  $scope.centerCarLoc = function () {
    mapService.map.center.latitude = mapService.car.center.latitude;
    mapService.map.center.longitude = mapService.car.center.longitude;
  };
})

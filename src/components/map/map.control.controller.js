'use strict';

angular.module('idlecars')
.controller('map.control.controller', function ($scope, mapService) {

  $scope.centerMyLoc = function () {
    mapService.map.center.latitude = mapService.marker.coords.latitude;
    mapService.map.center.longitude = mapService.marker.coords.longitude;
    mapService.googleMap.setZoom(12);
  };

  $scope.centerCarLoc = function () {
    mapService.map.center.latitude = mapService.car.coords.latitude;
    mapService.map.center.longitude = mapService.car.coords.longitude;
    mapService.googleMap.setZoom(12);
  };
})

'use strict';

angular.module('idlecars')
.controller('map.controller', function ($scope, mapService) {

  $scope.startmap = function() {
    var geocoder;

    var markAdressToMap = function () {
      geocoder = new google.maps.Geocoder();
      geocoder.geocode({ 'address': $scope.address}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          mapService.car.center.latitude = results[0].geometry.location.lat();
          mapService.car.center.longitude = results[0].geometry.location.lng();
          mapService.map.center.latitude = results[0].geometry.location.lat();
          mapService.map.center.longitude = results[0].geometry.location.lng();
          mapService.circle.center.latitude = results[0].geometry.location.lat();
          mapService.circle.center.longitude = results[0].geometry.location.lng();
          $scope.carLocOff = true;
          $scope.$apply();
        }
      });
    };

    var getCurrentLocation = function() {
      if(!!navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function(position) {
            mapService.marker.coords.latitude = position.coords.latitude;
            mapService.marker.coords.longitude = position.coords.longitude;
            $scope.myLocOff = true;
            $scope.map.control.refresh();
          }
      )}
    };

    markAdressToMap();
    getCurrentLocation();

    $scope.map = mapService.map;
    $scope.marker = mapService.marker;
    $scope.circle = mapService.circle;

  }

})

'use strict';

angular.module('idlecars')
.controller('map.controller', function ($scope, mapService) {
  $scope.startmap = function() {
    var geocoder;

    var setBounds = function() {
      if (mapService.markers.length > 1) {
        var map = $scope.map.control.getGMap();
        mapService.googleMap = map;
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < mapService.markers.length; i++) {
          var latlng = new google.maps.LatLng(mapService.markers[i].coords.latitude, mapService.markers[i].coords.longitude);
          bounds.extend(latlng);
        };
        map.fitBounds(bounds);

        if (map.getZoom() > 11) {
            map.setZoom(11);
        }
      }
    };

    var markAdressToMap = function () {
      geocoder = new google.maps.Geocoder();
      geocoder.geocode({ 'address': $scope.address}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          // get map object and send it to map.Service
          var map = $scope.map.control.getGMap();
          mapService.googleMap = map;

          //re-assign analyzied results from google
          mapService.car.coords.latitude = results[0].geometry.location.lat();
          mapService.car.coords.longitude = results[0].geometry.location.lng();
          mapService.map.center.latitude = results[0].geometry.location.lat();
          mapService.map.center.longitude = results[0].geometry.location.lng();
          mapService.circle.center.latitude = results[0].geometry.location.lat();
          mapService.circle.center.longitude = results[0].geometry.location.lng();

          // push car coordinates to array markers in map.service
          mapService.markers.push(mapService.car)

          // once done, show the car control button (binding to ng-if)
          $scope.carLocOff = true;
          $scope.$apply();
        }
      });
    };

    var getCurrentLocation = function() {
      if(!!navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function(position) {
            // re-assign the analyzied current location from browser
            mapService.marker.coords.latitude = position.coords.latitude;
            mapService.marker.coords.longitude = position.coords.longitude;

            // push car coordinates to array markers in map.service
            mapService.markers.push(mapService.marker)
            setBounds();

            // once done, show current location button
            $scope.myLocOff = true;

            // refresh the map once done getting current location
            $scope.map.control.refresh();
          }
      )}
    };

    $scope.map = mapService.map;
    $scope.marker = mapService.marker;
    $scope.circle = mapService.circle;

    markAdressToMap();
    getCurrentLocation();
  }
})

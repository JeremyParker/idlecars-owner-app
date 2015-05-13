'use strict';

angular.module('idlecars')
.controller('map.controller', function ($scope, mapService) {
  $scope.startmap = function() {

    // initiate two buttons off
    $scope.carLocOff = false
    $scope.myLocOff = false

    // clear markers every time loading map
    mapService.markers = [];

    var geocoder;

    var setBounds = function(fromWhere) {
      console.log(fromWhere);
      console.log($scope.carLocOff, $scope.myLocOff)

      if($scope.carLocOff && $scope.myLocOff) {
        if (mapService.markers.length > 1) {

          // get map object and send it to map.Service so that control button can access it
          var map = $scope.map.control.getGMap();
          mapService.googleMap = map;

          // creat a bound object
          var bounds = new google.maps.LatLngBounds();

          // add myLocation and carLocation to markers array
          for (var i = 0; i < mapService.markers.length; i++) {
            var latlng = new google.maps.LatLng(mapService.markers[i].coords.latitude, mapService.markers[i].coords.longitude);
            bounds.extend(latlng);
          };

          // zoom to fit markers automatically
          map.fitBounds(bounds);

          // contrain the initial zoom, not too zoom in
          if (map.getZoom() > 11) {
              map.setZoom(11);
          }
        }
      }
    };

    var markAdressToMap = function () {
      geocoder = new google.maps.Geocoder();
      geocoder.geocode({ 'address': $scope.address}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
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

          // apply all the changes to map
          $scope.$apply();

          // try to run set-boundary any way
          setBounds('from markAdress');
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
            mapService.markers.push(mapService.marker);

            // store the current location
            mapService.currentLoc = mapService.marker;

            // once done, show current location button
            $scope.myLocOff = true;

            // try to run set-boundary any way
            setBounds('from get location');
          }
      )}
    };

    // initiate the map
    $scope.map = mapService.map;
    $scope.marker = mapService.marker;
    $scope.circle = mapService.circle;

    // analyze zipcode, turn it into location
    markAdressToMap();

    // get current location only at the first time entered the website. and stores it in map service
    if (mapService.marker.coords.latitude == 0 && mapService.marker.coords.longitude == 0) {
      getCurrentLocation();
    }
    else {
      // just get the current location from the result of first getting, no need to get it again
      mapService.markers.push(mapService.currentLoc);

      // once done, show current location button
      $scope.myLocOff = true;

      // try to run set-boundary any way
      setBounds('from else');

    }

  }
})

'use strict';

angular.module('idlecars')
.controller('map.controller', function ($scope) {
  var geocoder;

  var markAdressToMap = function () {
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': $scope.address}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        $scope.map.center.latitude = results[0].geometry.location.lat();
        $scope.map.center.longitude = results[0].geometry.location.lng();
        $scope.circle.center.latitude = results[0].geometry.location.lat();
        $scope.circle.center.longitude = results[0].geometry.location.lng();
        $scope.mapIsVisable = true;
        $scope.$apply();
      }
    });
  };

  var handleNoGeolocation = function(errorFlag) {
    if (errorFlag) {
      var content = 'Error: The Geolocation service failed.';
    } else {
      var content = 'Error: Your browser doesn\'t support geolocation.';
    }
    console.log(content);
  }

  var getCurrentLocation = function() {
    if(!!navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          $scope.marker.coords.latitude = position.coords.latitude;
          $scope.marker.coords.longitude = position.coords.longitude;
          console.log('load')
          $scope.$apply();
        },
        function() {
          handleNoGeolocation(true);
        }
      )}
    else {
      // Browser doesn't support Geolocation
      handleNoGeolocation(false);
    }
  }

  markAdressToMap();
  getCurrentLocation();

  $scope.map = {
    center: {
      latitude: 0,
      longitude: 0
    },
    zoom: 11,
    options: {
      scrollwheel: false,
    }
  };

  $scope.marker = {
    id: 0,
    coords: {
      latitude: 0,
      longitude: 0
    },
    options:{
      icon: {
        url: '/assets/images/location.png',
        anchor: new google.maps.Point(20, 20)
      }
    }
  }


  $scope.circle = {
    center: {
      latitude: 0,
      longitude: 0
    },
    radius: 1500,
    stroke: {
      color: '#08B21F',
      weight: 2,
      opacity: 1
    },
    fill: {
      color: '#08B21F',
      opacity: 0.5
    }
  };
});

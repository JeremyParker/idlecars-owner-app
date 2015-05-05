'use strict';

angular.module('idlecars')
.controller('map.controller', function ($scope) {
  var geocoder;

  var markAdressToMap = function () {
    geocoder = new google.maps.Geocoder();
    console.log($scope.address)
    geocoder.geocode({ 'address': $scope.address}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
          $scope.map.center.latitude = results[0].geometry.location.lat();
          $scope.map.center.longitude = results[0].geometry.location.lng();
          $scope.circle.center.latitude = results[0].geometry.location.lat();
          $scope.circle.center.longitude = results[0].geometry.location.lng();
          $scope.mapIsVisable = true;
          $scope.$apply();
      }
    })
  }

  markAdressToMap();

  $scope.map = {
    center: {
      latitude: 0,
      longitude: 0
    },
    zoom: 12,
    options: {
      scrollwheel: false,
    }
  }

  $scope.circle = {
    center: {
      latitude: 0,
      longitude: 0
    },
    radius: 700,
    stroke: {
      color: '#08B21F',
      weight: 2,
      opacity: 1
    },
    fill: {
      color: '#08B21F',
      opacity: 0.5
    }
  }
})

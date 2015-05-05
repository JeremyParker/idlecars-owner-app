'use strict';

angular.module('idlecars')
.directive('map', function () {
  return {
    templateUrl: 'app/cars/map.html',
    controller: 'map.controller',
    scope: {
      address: "@"
    }
  }
});

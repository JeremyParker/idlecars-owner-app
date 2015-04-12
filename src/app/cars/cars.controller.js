'use strict';

angular.module('idlecars')
.controller('CarsCtrl', function ($scope, $http, config) {
  $scope.baseUrl = config.api_base_url;
});

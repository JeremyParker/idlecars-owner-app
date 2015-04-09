'use strict';

angular.module('idlecars')
.controller('MainCtrl', function ($scope, $http, config) {
  $scope.baseUrl = config.api_base_url;
});

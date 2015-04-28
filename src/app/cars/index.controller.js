'use strict';

angular.module('idlecars')
.controller('cars.indexCtrl', function ($scope, $http, CarService, $cookieStore, $rootScope) {
  CarService.query().$promise.then(function(cars) {
    $scope.cars = cars;
  });

  // check the browser cookies, show welcome text at first visit
  var first_time = $cookieStore.get('first_time');
  if (first_time == null) {
    $rootScope.modal_show = true;
    $cookieStore.put('first_time','no');
    $rootScope.toDisable = true;
  }
  else {
    $rootScope.toDisable = false;
    $rootScope.modal_show = false;
  }
})

.controller('modal.controller', function ($scope, $rootScope) {

  // colse button clicked
  $scope.closeModal = function() {
    $scope.modal_show = false;
    $rootScope.toDisable = false;
  }
})



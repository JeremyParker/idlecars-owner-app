'use strict';

angular.module('idlecars')
.controller('bookings.controller', function ($scope, Restangular) {

  Restangular.all('bookings').getList().then(function (bookings) {
    var booking = bookings[0];

    $scope.username = 'Brian Claypool';

    $scope.car = booking.car;
    $scope.state = booking.state;
  })



})

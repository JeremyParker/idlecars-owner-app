'use strict';

angular.module('idlecars')
.controller('bookings.controller', function ($scope, Restangular, MyDriverService) {

  var initScope = function (me) {
    $scope.username = me.admin_display;
  }

  MyDriverService.get().then(initScope);

  Restangular.all('bookings').getList().then(function (bookings) {
    var booking = bookings[0];

    $scope.car = booking.car;
    $scope.state = booking.state;
  })
})

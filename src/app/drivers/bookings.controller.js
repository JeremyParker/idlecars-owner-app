'use strict';

angular.module('idlecars')
.controller('bookings.controller', function ($scope, Restangular, MyDriverService) {

  var initScope = function (me) {
    var name = me.first_name + me.last_name;
    $scope.username = name || me.phone_number;
  }

  MyDriverService.get().then(initScope);

  Restangular.all('bookings').getList().then(function (bookings) {
    var booking = bookings[0];

    $scope.car = booking.car;
    $scope.state = booking.state;
  })
})

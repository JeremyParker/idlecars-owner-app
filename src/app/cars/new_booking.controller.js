'use strict';

angular.module('idlecars')
.controller('cars.newBooking.controller', function ($stateParams, RequireAuthService) {
  var createBooking = function() {
    console.log('createBooking');
  }

  RequireAuthService.go().then(createBooking);
});

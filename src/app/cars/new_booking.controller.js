'use strict';

angular.module('idlecars')
.controller('cars.newBooking.controller', function($state, $stateParams, $timeout, BookingService, DocRouterService) {

  $timeout(function() {
    BookingService.post({car: $stateParams.carId})
    .then(function(){_afterSaveAttempting('bookingSuccess')})
    .catch(function(){_afterSaveAttempting('driverAccount.bookings')})
  });

  var _afterSaveAttempting = function(destination) {
    DocRouterService.requiredDocState()
    .then(function(nextState) {
      if (nextState) {
        $state.go(nextState);
      } else {
        $state.go(destination);
      }
    });
  }
});

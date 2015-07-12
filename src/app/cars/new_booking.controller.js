'use strict';

angular.module('idlecars')
.controller('cars.newBooking.controller', function($state, $stateParams, $timeout, BookingService, DocRouterService) {
  var newBooking = new BookingService({car: $stateParams.carId});

  $timeout(function() {
    newBooking.$save()
    .then(function(data) {
      $state.go('bookingDetail', {bookingId: data.id});
    })
    .catch(_bookingSaveFailed);
  });

  var _bookingSaveFailed = function() {
    DocRouterService.requiredDocState()
    .then(function(nextState) {
      if (nextState) {
        $state.go(nextState);
      } else {
        // back to carDetail state
        $state.go('^');
      }
    });
  }
});

'use strict';

angular.module('idlecars')
.controller('cars.showCtrl', function ($scope, $state, $stateParams, BookingService) {
  if (!$stateParams.car) {
    $state.go('cars');
  }

  $scope.car = $stateParams.car;

  $scope.createBooking = function(event) {
    event.preventDefault();

    var bookingParams = {
      user_account: $scope.user_account,
      car_id: $scope.car.id,
    }
    var newBooking = new BookingService(bookingParams);
    newBooking.$save().then(_saveDidComplete);
  }

  var _saveDidComplete = function(data) {
    $state.go('bookingsShow', {bookingId: 4});
  }
});

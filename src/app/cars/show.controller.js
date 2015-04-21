'use strict';

angular.module('idlecars')
.controller('cars.showCtrl', function ($scope, $stateParams, BookingService) {
  $scope.car = $stateParams.car;

  $scope.createBooking = function(accountParams) {
    var bookingParams = {
      user_account: accountParams,
      car_id: $scope.car.id,
    }
    var newBooking = new BookingService(bookingParams);
    newBooking.$save().then(_saveDidComplete);
  }

  var _saveDidComplete = function() {
    console.log('this needs to be implemented');
  }
});

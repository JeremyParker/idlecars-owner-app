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

  $scope.showAlert = function(message) {
    alert(message);
  }

  var _saveDidComplete = function() {
    // TODO: implement this for reals
    alert('you submitted: ' + JSON.stringify($scope.user_account));
  }
});

'use strict';

angular.module('idlecars')
.controller('cars.showCtrl', function ($scope, $rootScope, $state, $stateParams, BookingService, CarService) {

  $rootScope.$broadcast('navListing');

  if (!$stateParams.car) {
    CarService.get({carId: $stateParams.carId}).$promise.then(
      function(car) {
        $scope.car = car;
      },
      function(response) {
        $state.go('cars');
      }
    );
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
    $state.go('bookingsShow', {bookingId: 4242});
  }
});

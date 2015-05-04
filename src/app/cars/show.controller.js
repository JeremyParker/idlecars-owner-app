'use strict';

angular.module('idlecars')
.controller('cars.showCtrl', function ($scope, $state, $stateParams, BookingService) {
  if (!$stateParams.car) {
    // TODO(jefk): add a car endpoint to allow deep linking
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

  $scope.map = {
    center: {
      latitude: 40.6949943,
      longitude: -73.9880248
    },
    zoom: 14,
    options: {
      scrollwheel: false
    }
  }

  $scope.marker = {
    coords: {
      latitude: 40.6949943,
      longitude: -73.9880248
    },
    options: {
      animation: google.maps.Animation.DROP
    }
  }

  $scope.circle = {
    center: $scope.marker.coords,
    radius: 500,
    stroke: {
      color: '#08B21F',
      weight: 2,
      opacity: 1
    },
    fill: {
      color: '#08B21F',
      opacity: 0.5
    }
  }

});

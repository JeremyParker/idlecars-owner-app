'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('cars', {
      url: '/',
      templateUrl: 'app/cars/index.html',
      controller: 'cars.indexCtrl'
    })

    .state('carsShow', {
      url: '/cars/:carId',
      templateUrl: 'app/cars/show.html',
      params: {car: null},
      controller: 'cars.showCtrl'
    })

    .state('carsShow.renewal', {
      url: '/renewals/:renewalId',
      controller: 'renewal.showCtrl',
      templateUrl: 'app/cars/renewal.html',
      onExit: function($previousState) {
        $previousState.forget();
      },
    })

    .state('carsBooking', {
      url: '/cars/:carId/booking',
      templateUrl: 'app/cars/booking.html',
      params: {car: null},
      controller: 'cars.showCtrl'
    });

});

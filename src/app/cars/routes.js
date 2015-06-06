'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('cars', {
      url: '/',
      views: {
        'navbar': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbar_main.controller',
        },
        'content': {
          templateUrl: 'app/cars/index.html',
          controller: 'cars.indexCtrl',
        },
      },
    })

    .state('cars.carsShow', {
      url: 'cars/:carId',
      views: {
        'content@': {
          templateUrl: 'app/cars/show.html',
          params: {car: null},
          controller: 'cars.showCtrl',
        },
      },
    })

    .state('carsShow.renewal', {
      url: '/renewals/:renewalId',
      views: {
        'navbar': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbar_main.controller',
        },
        'content': {
          templateUrl: 'app/cars/renewal.html',
          controller: 'renewal.showCtrl',
          onExit: function($previousState) {
            // prevent showing modal again when you hit back
            $previousState.forget();
          },
        },
      },
    })

    .state('cars.carsShow.carsBooking', {
      url: '/booking',
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_field.html',
          controller: 'navbar_field.controller',
        },
        'content@': {
          templateUrl: 'app/cars/booking.html',
          params: {car: null},
          controller: 'cars.booking.controller'
        },
      },
    });

});

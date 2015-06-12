'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('cars.bookingsShow', {
      url: 'bookings/:bookingId',
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbar_main.controller',
        },
        'content@': {
          templateUrl: 'app/bookings/show.html',
          controller: 'show.controller',
        },
      },
    })

});

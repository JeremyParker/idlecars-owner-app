'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    // TODO: do not put this page under the cars route
    .state('bookingDetail', {
      url: '/bookings/:bookingId',
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          templateUrl: 'app/bookings/docs_overview.html',
          controller: 'docsOverview.controller',
        },
      },
    })

    .state('bookingSuccess', {
      url: '/booking_success',
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          templateUrl: 'app/bookings/success.html',
        },
      },
    })

});

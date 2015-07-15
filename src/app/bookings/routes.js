'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('bookingDetail', {
      url: '/bookings/:bookingId',
      data: {requireAuth: true},
      params: {goRequiredDoc: true},
      data: {navbarInfo: {title: 'Driver Documents', enableNext: true}},
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

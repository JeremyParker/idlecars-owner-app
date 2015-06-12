'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('cars.bookingsShow', {
      url: 'bookings/:bookingId',
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_documents.html',
          controller: 'navbar_documents.controller',
        },
        'content@': {
          templateUrl: 'app/bookings/show.html',
          controller: 'show.controller',
        },
      },
      resolve: { preDefine: function() { return {title: 'Driver Documents', enableBack: false} }}
    })

});

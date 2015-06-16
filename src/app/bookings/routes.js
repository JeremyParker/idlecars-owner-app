'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('cars.bookingsShow', {
      url: 'bookings/:bookingId',
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_documents.html',
          controller: 'navbarDocuments.controller',
        },
        'content@': {
          templateUrl: 'app/bookings/docs_overview.html',
          controller: 'docsOverview.controller',
        },
      },
      resolve: { preDefine: function() { return {title: 'Driver Documents', enableBack: false} }},
    })

    .state('cars.bookingSuccess', {
      url: 'booking/success',
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_documents.html',
          controller: 'navbarDocuments.controller',
        },
        'content@': {
          templateUrl: 'app/bookings/success.html',
        },
      },
      resolve: { preDefine: function() { return {title: '', enableBack: true} }},
    })

});

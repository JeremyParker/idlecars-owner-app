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

    .state('cars.carsShow.renewal', {
      url: '/renewals/:renewalId',
      views: {
        'content@': {
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
          template: '<div ui-view = "form"></div>',
          params: {car: null},
          controller: 'cars.booking.controller'
        },
      },
    })

    .state('cars.carsShow.carsBooking.email', {
      views: {
        'form@cars.carsShow.carsBooking': {
          templateUrl: 'app/cars/booking_form.html',
          controller: 'booking.email.controller',
        },
      },
      onEnter: function (FieldService) {
        FieldService.index = 0;
      },
    })

    .state('cars.carsShow.carsBooking.name', {
      views: {
        'form@cars.carsShow.carsBooking': {
          templateUrl: 'app/cars/booking_form.html',
          controller: 'booking.name.controller',
        },
      },
      onEnter: function (FieldService) {
        FieldService.index = 1;
      },
    })

    .state('cars.carsShow.carsBooking.phone_number', {
      views: {
        'form@cars.carsShow.carsBooking': {
          templateUrl: 'app/cars/booking_form.html',
          controller: 'booking.phone_number.controller',
        },
      },
      onEnter: function (FieldService) {
        FieldService.index = 2;
      },
    })


});

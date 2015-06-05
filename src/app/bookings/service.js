'use strict'

angular.module('idlecars')
.factory('BookingService', function($resource, config) {
  return $resource(config.api_base_url + 'bookings/');
})

.service('FieldService', function() {
  this.index = 0;
  this.isValid = false;
})

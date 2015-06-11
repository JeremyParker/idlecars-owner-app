angular.module('idlecars')
.factory('DriverService', function($resource, config) {
  // NOTE: not tested, hopefully it is something this simple
  return $resource(config.api_base_url + 'drivers/me/');
})

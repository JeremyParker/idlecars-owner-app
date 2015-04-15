angular.module('idlecars')
.factory('Car', function($resource, config) {
  return $resource(config.api_base_url + 'cars');
});

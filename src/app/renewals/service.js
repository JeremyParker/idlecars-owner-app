angular.module('idlecars')
.factory('RewnewalService', function($resource, config) {
  return $resource(config.api_base_url + 'renewals/:renewalId/', null, {
    renew: {
      method: 'PATCH',
      params: {renewalId: "@renewalId"}
    }
  });
});

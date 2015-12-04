'use strict';

angular.module('idlecars')
.factory('OwnerRequiredService', function ($state, MyOwnerService) {
  var service = {};

  var _nextMissingDoc = function (owner) {
    for (var key in docOrder) {
      if (!owner[key]) {
        return docOrder[key];
      }
    }
    return null;
  }

  var docOrder = {
    zipcode: 'ownerAccount.onboarding.email',
  }

  service.requiredDocState = function (owner) {
    if (!owner) {
      return MyOwnerService.get().then(function (owner) {
        return _nextMissingDoc(owner);
      })
    }
    else {
      return _nextMissingDoc(owner);
    }
  }

  return service;
})

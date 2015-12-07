'use strict';

angular.module('idlecars')
.factory('RequiredService', function (CarService, MyOwnerService, UserService) {
  var service = {};

  var _nextMissingDoc = function (object, objectService) {
    var docOrder = objectService.requiredDocs;

    for (var key in docOrder) {
      if (!object[key] || object[key] == docOrder[key].dislike) {
        return docOrder[key].state;
      }
    }
    return null;
  }

  service.userState = function (user) {
    if (!user) {
      return UserService.get().then(function (user) {
        return _nextMissingDoc(user, UserService)
      })
    }
    else { return _nextMissingDoc(user, UserService) }
  }

  service.ownerState = function (owner) {
    if (!owner) {
      return MyOwnerService.get().then(function (owner) {
        return _nextMissingDoc(owner, MyOwnerService)
      })
    }
    else { return _nextMissingDoc(owner, MyOwnerService) }
  }

  service.carState = function (car) {
    if (!car) {
      return CarService.get().then(function (car) {
        return _nextMissingDoc(car, CarService)
      })
    }
    else { return _nextMissingDoc(car, CarService) }
  }

  return service;
})

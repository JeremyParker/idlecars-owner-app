'use strict';

angular.module('idlecars')
.directive('modal', function () {
  return {
    templateUrl: 'app/cars/modal.html',
    controller: 'modal.controller',
  };
});

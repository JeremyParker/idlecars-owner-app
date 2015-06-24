'use strict';

angular.module('idlecars')
.controller('auth.login.controller', function ($scope, FieldService, Restangular, AppNotificationService) {
  $scope.login = function() {

    var phoneNumber = Restangular.one('phone_numbers', $scope.user.username);
    phoneNumber.get().then(function (response) {
      FieldService.login($scope.user);
    }, function (error) {
      AppNotificationService.push('Sorry, your account does not exist')
    })
  };
});

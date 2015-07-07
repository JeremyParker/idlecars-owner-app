'use strict';

angular.module('idlecars')
.controller('auth.login.controller', function ($scope, FieldService, Restangular, AppNotificationService, RequireAuthService) {

  // TODO: this should not reference the Field Service
  $scope.min_password = FieldService.getMinPassword();

  // TODO: pass the phone number in as a route param
  if (FieldService.user_account) {
    $scope.user = {username: FieldService.user_account.phone_number, password: ''};
  }

  $scope.login = function() {
    var phoneNumber = Restangular.one('phone_numbers', $scope.user.username);
    phoneNumber.get().then(function (response) {
      FieldService.login($scope.user).catch(function (error) {
        $scope.user.password = '';
      });
    }, function (error) {
      // TODO: return this error from the server
      AppNotificationService.push("Sorry, we couldn't find this phone number");
    })
  };
});

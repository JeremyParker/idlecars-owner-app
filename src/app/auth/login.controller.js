'use strict';

angular.module('idlecars')
.controller('auth.login.controller', function ($scope, FieldService, Restangular, AppNotificationService) {

  $scope.min_password = FieldService.getMinPassword();

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
      AppNotificationService.push('Sorry, we couldn\'t find this phone number')
      $scope.user.password = '';
    })
  };
});

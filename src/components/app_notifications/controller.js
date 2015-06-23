'use strict';

angular.module('idlecars')
.controller('appNotifications.controller', function ($scope, $timeout, AppNotificationService) {
  $scope.messages = AppNotificationService.messages;
});

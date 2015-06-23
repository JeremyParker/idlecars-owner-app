'use strict';

angular.module('idlecars')
.factory('appNotificationInterceptor', function($q, AppNotificationService) {
  var interceptor = {};

  interceptor.responseError = function(rejection) {
    var notifications = rejection.data._app_notifications || [];
    for (var i = 0; i < notifications.length; i++) {
      AppNotificationService.push(notifications[i]);
    }

    return $q.reject(rejection);
  }

  return interceptor;
});

'use strict';

angular.module('idlecars',
  [
    'ngAnimate', 'ngCookies', 'ngResource',
    'ui.router',
    'ic.appConfig',
  ]
)
.config(function ($urlRouterProvider, $resourceProvider) {
  $urlRouterProvider.otherwise('/');
  $resourceProvider.defaults.stripTrailingSlashes = false;
});

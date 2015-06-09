'use strict';

angular.module('idlecars',
  [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ic.appConfig',
    'uiGmapgoogle-maps',
    'ct.ui.router.extras.previous',
  ]
)
.config(function ($urlRouterProvider, $resourceProvider) {
  $urlRouterProvider.otherwise('/');
  $resourceProvider.defaults.stripTrailingSlashes = false;
})

.run(function (HistoryService) {
  HistoryService.Listen();
})

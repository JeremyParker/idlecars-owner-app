'use strict';

angular.module('idlecars')
.directive('navBar', function () {
  return {
    templateUrl: 'components/navbar/navbar.html',
    controller: 'navbar.controller',
    scope: {
      showBack: "=back"
    }
  };
});

'use strict';

angular.module('idlecars')
.directive('tutorial', function () {
  return {
    templateUrl: 'components/tutorial/template.html',
    controller: function ($scope, $localStorage) {
      console.log($localStorage)
    }
  }
})

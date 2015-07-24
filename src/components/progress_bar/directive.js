'use strict';

angular.module('idlecars')
.directive('progressBar', function () {
  return {
    templateUrl: 'components/progress_bar/template.html',
    scope: {
      progress: '@',
      steps: '@',
      step: '@',
    }
  };
});

'use strict';

angular.module('idlecars')
.directive('progressBar', function () {
  return {
    templateUrl: 'components/progress_bar/template.html',
    controller: function ($scope) {
      if($scope.steps){ $scope.completion = $scope.step/$scope.steps*100 + '%'};
      if($scope.progress){ $scope.completion = $scope.progress + '%' };
    },
    scope: {
      progress: '@',
      steps: '@',
      step: '@',
    }
  };
});

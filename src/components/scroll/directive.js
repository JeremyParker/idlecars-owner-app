'use strict';

angular.module('idlecars')
.directive('scroll', function ($interval, $timeout, $state, ScrollService) {

  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      scope.$watch(function () {return $state.current.name}, function () {
        if (ScrollService.scrollPosition[$state.current.name]) {
          $timeout(function () {
            element[0].scrollTop = 480;
            console.log('changed')
          })
        };
      })

      $interval(function () {
        ScrollService.scrollPosition[$state.current.name] = element[0].scrollTop;
        console.log(ScrollService.scrollPosition)
      }, 500)
    },
  };
});

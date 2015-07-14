'use strict';

angular.module('idlecars')
.directive('scroll', function ($timeout, $state, ScrollService) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var position = ScrollService.scrollPosition[$state.current.name];

      scope.$on('$viewContentLoaded', function(){
        $timeout(function () {
          element[0].scrollTop = position;
        }, 500)
      });

      element[0].onscroll = function () {
        ScrollService.scrollPosition[$state.current.name] = element[0].scrollTop;
      }
    },
  };
});

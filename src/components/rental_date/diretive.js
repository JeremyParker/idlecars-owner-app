'use strict';

angular.module('idlecars')
.directive('rentalDate', function () {
  return {
    templateUrl: 'components/rental_date/template.html',
    controller: function ($scope) {
      $scope.options = {
        clear: '',
        today: '',
        min: 7,
        weekdaysShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        onClose: function () {
          console.log($scope.date.getMonth())
        }
      }
    }
  }
})

'use strict';

angular.module('idlecars')
.directive('bookingDate', function () {
  return {
    templateUrl: 'components/rental_date/template.html',
    controller: function ($scope, BookingService) {
      $scope.options = {
        clear: '',
        today: '',
        min: $scope.booking.first_valid_end_time,
        weekdaysShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        onClose: function () {
          $scope.changeEndDate($scope.date);
        }
      }
    }
  }
})

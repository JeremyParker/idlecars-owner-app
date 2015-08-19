'use strict';

angular.module('idlecars')
.directive('rentalDate', function () {
  return {
    templateUrl: 'components/rental_date/template.html',
    controller: function ($scope, BookingService) {
      $scope.options = {
        clear: '',
        today: '',
        min: $scope.booking.first_valid_end_time,
        weekdaysShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        onClose: function () {
          $scope.isBusy = true;
          var date = $scope.date;
          var patchData = {end_time: [date.getFullYear(), date.getMonth(), date.getDate()]};
          BookingService.patch($scope.booking.id, patchData).then(function (data) {
            $scope.booking.end_time_display = data.end_time_display;
            $scope.isBusy = false;
          })
        }
      }
    }
  }
})

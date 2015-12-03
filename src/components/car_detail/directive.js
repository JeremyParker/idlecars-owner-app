'use strict';

angular.module('idlecars')
.directive('carDetail', function () {
  return {
    scope: {
      car: '=',
    },
    templateUrl: 'components/car_detail/template.html',
    controller: function ($scope, $state, CarService) {
      $scope.go = function (key) {
        if (key == 'AddBankLink') {
          $state.go('ownerAccount.bankLink');
        }
        else if (key == 'RemoveListing') {
          CarService.patch($scope.car.id, {next_available_date: null})
          .then(function (car) { $state.go('cars.update.available', {carId: $scope.car.id}) })
        }
        else if (key == 'Relist') {
          var date = new Date();
          var today = [date.getFullYear(), date.getMonth(), date.getDate()];

          CarService.patch($scope.car.id, {next_available_date: today})
          .then(function (car) { $state.go('cars.update.available', {carId: $scope.car.id}) } )
        }
        else if (key == 'GoNextAvailableDate') {
          $state.go('cars.update.available', {carId: $scope.car.id})
        }
      }
    }
  }
});

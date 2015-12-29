'use strict';

angular.module('idlecars')
.directive('carDetail', function () {
  return {
    scope: {
      car: '=',
      showButton: '=',
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
        else if (key == 'RenewListing') {
          CarService.renew($scope.car.id).then(function (car) { $scope.car = car })
        }
        else if (key == 'ApproveInsurance') {
          CarService.patch($scope.car.id, {insurance: 'approved'})
          .then(function (car) { $scope.car = car } )
        }
        else if (key == 'RejectInsurance') {
          CarService.patch($scope.car.id, {insurance: 'rejected'})
          .then(function (car) { $scope.car = car } )
        }
      }
    }
  }
});

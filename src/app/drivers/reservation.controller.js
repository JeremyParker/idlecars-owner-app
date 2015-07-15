'use strict';

angular.module('idlecars')
.controller('reservation.controller', function ($scope) {
  $scope.username = 'Brian Claypool';

  $scope.car = {
    name: 'Lincoln MKT',
    image_url: 'https://s3.amazonaws.com/images.idlecars.com/toyota_camry.jpg',
    cost: 500,
    cost_time: 'a week',
    listing_features: '2 week minimum Queens, NY'
  }
})

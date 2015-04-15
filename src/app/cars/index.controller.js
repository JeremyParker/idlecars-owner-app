'use strict';

angular.module('idlecars')
.controller('cars.indexCtrl', function ($scope, $http) {
  $scope.cars = [
    {
      id: 3,
      name: 'Toyota Camry',
      listing_features: 'These Come From Server ∙ Brooklyn, NY ∙ Idlecars Certified',
      cost: '425',
      cost_time: 'a week',
      subheads: ['Week-to-week ∙ Brooklyn, NY', '$425 Deposit Required'],
    },
    {
      id: 5,
      name: 'Chevrolet Suburban',
      listing_features: 'Has a Funky Smell ∙ Queens, NY',
      cost: '650',
      cost_time: 'a week',
      subheads: ['2 week minimum ∙ Queens, NY', '$1,000 Deposit Required'],
    },
  ];
});

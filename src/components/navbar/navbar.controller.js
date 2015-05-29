'use strict';

angular.module('idlecars')
.controller('navbar.controller', function ($scope, $rootScope, $location, $state, $previousState, config, navService) {
  // default settings
  var defaultNavbar = function() {
    $scope.showBack = true;
    $scope.showLogo = true;
    $scope.showBackSign = false;
    $scope.showTitle = false;
    $scope.showNext = false;
  }

  $rootScope.$on('navFieldForm', function(event, args){
    $scope.showBack = false;
    $scope.showLogo = false;
    $scope.showBackSign = true;
    $scope.showTitle = true;
    $scope.showNext = true;
  })

  $rootScope.$on('navListing', function(event, args){
    defaultNavbar();
  })


  $scope.goBack = function() {
    if (_isAtRoot()) {
      window.location.replace(config.landing_page_url);
      return;
    }

    _popState();
  };

  $scope.goNext = function() {
    navService.index = navService.index + 1;
  }

  $scope.back = function() {
    if (!navService.index) {
       $scope.goBack();
    }
    else {
      navService.index = navService.index - 1;
    }
  }

  var _popState = function() {
    var popped = _prevOrDefault();
    $state.go(popped.state, popped.params).then(function() {
      $previousState.forget();
    });
  };

  var _isAtRoot = function() {
    var currentPath = $location.path();
    return currentPath === '/';
  };

  var _prevOrDefault = function() {
    return $previousState.get() || {state: 'cars'};
  };
});
